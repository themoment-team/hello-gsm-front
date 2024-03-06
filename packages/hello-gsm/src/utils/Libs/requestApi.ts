import axios, { AxiosRequestConfig } from 'axios';

import BASE_URL from 'shared/baseURL';

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      const ExceptionURL = [
        '/information',
        '/apply',
        '/calculator',
        '/calculator/ged',
        '/application',
      ];

      // 현재 URL이 /auth/signin, / 이 아닌 경우에만 리다이렉트
      if (ExceptionURL.includes(window.location.pathname)) {
        window.location.replace('/auth/signin');
      }
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
