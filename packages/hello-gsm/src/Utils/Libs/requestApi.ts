import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, getRefreshToken } from 'Utils/cookies';
import { AuthController } from './requestUrls';

const RequestApi = (p: AxiosRequestConfig) => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  console.log('accessToken : ' + accessToken);
  console.log('refreshToken : ' + refreshToken);

  const refresh = async () => {
    try {
      // url 추가
      await axios.post(BASE_URL + AuthController.refresh(), {
        headers: {
          Cookie: refreshToken,
        },
      });
      console.log('get refresh');
      RequestApi(p);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  if (refreshToken) {
    if (accessToken) {
      try {
        console.log('accesstoken exist');
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
        console.log('accesstoken exist and get success');
        return res;
      } catch (error) {
        console.log('accesstoken exist error');
        return error;
      }
    } else {
      console.log('no accesstoken');
      refresh();
    }
  }
};

export default RequestApi;
