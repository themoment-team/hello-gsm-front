import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, getRefreshToken } from 'Utils/cookies';
import { AuthController } from './requestUrls';
import { useCookies } from 'react-cookie';

const RequestApi = (p: AxiosRequestConfig) => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);

  console.log('accessToken : ' + cookies.accessToken);
  console.log('refreshToken : ' + cookies.refreshToken);

  const refresh = async () => {
    try {
      // url 추가
      await axios.post(BASE_URL + AuthController.refresh(), {
        headers: {
          Cookie: cookies.accessToken,
        },
      });
      console.log('get refresh');
      RequestApi(p);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  if (cookies.refreshToken) {
    if (cookies.accessToken) {
      try {
        console.log('accesstoken exist');
        const res = axios({
          method: p.method,
          baseURL: BASE_URL,
          url: p.url,
          data: p.data,
          withCredentials: true,
          headers: {
            Cookie: cookies.accessToken,
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
