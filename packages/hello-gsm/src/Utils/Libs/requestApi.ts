import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';

const RequestApi = (p: AxiosRequestConfig, token?: string) => {
  try {
    const res = token
      ? axios({
          method: p.method,
          baseURL: BASE_URL,
          url: p.url,
          data: p.data,
          withCredentials: true,
          headers: {
            cookie: token || '',
          },
        })
      : axios({
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
