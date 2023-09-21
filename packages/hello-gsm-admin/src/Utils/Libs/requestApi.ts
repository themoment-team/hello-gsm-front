import BASE_URL from 'shared/baseURL';
import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      window.location.replace('/signin');
    }
    return Promise.reject(error);
  },
);

const RequestApi = (p: AxiosRequestConfig) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
      withCredentials: true,
    });

    return res;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
