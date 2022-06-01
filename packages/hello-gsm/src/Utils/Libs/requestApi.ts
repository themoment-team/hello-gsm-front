import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';

const RequestApi = (p: AxiosRequestConfig) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
