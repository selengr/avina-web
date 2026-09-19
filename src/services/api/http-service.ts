import { IApiResponse } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { HOST_API_KEY } from '../../../config-global';

const httpService = axios.create({
  baseURL: HOST_API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.request.use(
  (config) => {
    console.log('HOST_API_KEY===', config);
    // اضافه کردن توکن یا هدرهای موردنیاز
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  <T>(res: AxiosResponse<IApiResponse<T>>) => {
    return res;
  },
  (error) => {
    console.log('error===', error);
    return Promise.reject(error);
  }
);

const get = <T>(url: string, params?: any) => {
  return httpService.get<any, IApiResponse<T>>(url, { params });
};

const post = <T>(url: string, data: any) => {
  return httpService.post<any, IApiResponse<T>>(url, data);
};

export default {
  ...httpService,
  get,
  post,
};
