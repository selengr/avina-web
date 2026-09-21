import { IApiResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { HOST_API_KEY } from '../../../config-global';

const httpService = axios.create({
  baseURL: HOST_API_KEY || undefined,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 12000,
});

httpService.interceptors.request.use(
  (config) => {
    if (!HOST_API_KEY) {
      return Promise.reject(new Error('API base URL is not configured'));
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpService.interceptors.response.use(
  <T>(res: AxiosResponse<IApiResponse<T>>) => res,
  (error) => Promise.reject(error)
);

const get = <T>(url: string, params?: unknown) => {
  return httpService.get<any, IApiResponse<T>>(url, { params });
};

const post = <T>(url: string, data: unknown) => {
  return httpService.post<any, IApiResponse<T>>(url, data);
};

export default {
  ...httpService,
  get,
  post,
};
