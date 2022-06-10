import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, getRefreshToken } from 'Utils/cookies';
import { AuthController } from './requestUrls';

const RequestApi = (p: AxiosRequestConfig) => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  const refresh = async () => {
    try {
      // url 추가
      await axios.post(BASE_URL + AuthController.refresh(), {
        headers: {
          Cookie: refreshToken,
        },
      });
      RequestApi(p);
    } catch (error) {
      return error;
    }
  };

  if (refreshToken) {
    if (accessToken) {
      try {
        const res = axios({
          method: p.method,
          baseURL: BASE_URL,
          url: p.url,
          data: p.data,
          withCredentials: true,
          headers: {
            Cookie: accessToken,
          },
        });
        return res;
      } catch (error) {
        return error;
      }
    } else {
      refresh();
    }
  }
};

export default RequestApi;
