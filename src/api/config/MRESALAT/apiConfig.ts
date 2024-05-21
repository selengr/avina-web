import axios from 'axios';
import { Address } from '../server/server.js';
import { setAlert, setBackDrop } from 'redux/action/creators';
import { store } from 'redux/store/Store';
import { Cookie } from 'storage-manager-js';

const instance = axios.create();

const token: any = Cookie.get('access_token');
if (process.env.NODE_ENV === `development`) {
  instance.defaults.baseURL = Address().local.mResalatEndPoint; //local endpoint Address
} else if (process.env.NODE_ENV === `production`) {
  instance.defaults.baseURL = Address().server.mResalatEndPoint; //server endpoint Address
}

instance.defaults.headers.common['Content-Type'] = 'Application/json';
instance.defaults.headers.common['Content-Encoding'] = 'gzip, br, deflate';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, XMLHttpRequest';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
instance.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
instance.defaults.headers.common['host-key'] = '2011';
instance.defaults.timeout = 10000;
instance.defaults.decompress = true;

instance.interceptors.request.use(
  function (config) {
    const AlertState = store.getState().alert;
    if (AlertState.open) {
      store.dispatch(setBackDrop(false) as any);
    } else if (!AlertState.open) {
      store.dispatch(setBackDrop(true) as any);
    }
    // @ts-ignore
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // if (process.env.NODE_ENV === `development`) {
    // console.log('Request => ', config);
    // }
    return config;
  },

  function (error) {
    store.dispatch(setBackDrop(false) as any);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    store.dispatch(setBackDrop(false) as any);
    return res;
  },
  (err) => {
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500;
    store.dispatch(setBackDrop(false) as any);
    if (expectedError) {
      let message = `خطای دریافت اطلاعات از سرور`;
      if (err.response.data.message === 'user and relation exist') {
        message = 'شرکت‌کننده با این شماره قبلا ثبت شده است.';
      }
      // console.log('Unexpected Error: ', err);
      store.dispatch(setAlert(true, 'error', message, 'Alert') as any);
    }
    // if (err.code == 'ECONNABORTED') {
    //   console.count('errrrrrr retry');
    // }
    return Promise.reject(err);
  },
);

export default {
  GET: instance.get,
  POST: instance.post,
  PUT: instance.put,
  DELETE: instance.delete,
  ALL: axios.all,
};
