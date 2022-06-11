import { BASE_URL } from 'shared/config';
import axios, { AxiosRequestConfig } from 'axios';

const RequestApi = (p: AxiosRequestConfig, getToken?: string) => {
  const token: string = getToken ? getToken : '';
  // const refresh = async () => {
  //   try {
  //     // url 추가
  //     await axios.post(BASE_URL + AuthController.refresh(), {
  //       headers: {
  //         Cookie: refreshToken,
  //       },
  //     });
  //     console.log('get refresh');
  //     RequestApi(p);
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };

  // if (refreshToken) {
  //   if (accessToken) {
  //     try {
  //       console.log('accesstoken exist');
  //       const res = axios({
  //         method: p.method,
  //         baseURL: BASE_URL,
  //         url: p.url,
  //         data: p.data,
  //         withCredentials: true,
  //         headers: {
  //           Cookie: accessToken,
  //         },
  //       });
  //       console.log('accesstoken exist and get success');
  //       return res;
  //     } catch (error) {
  //       console.log('accesstoken exist error');
  //       return error;
  //     }
  //   } else {
  //     console.log('no accesstoken');
  //     refresh();
  //   }
  // }

  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
      withCredentials: true,
      headers: {
        Cookies: token,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
