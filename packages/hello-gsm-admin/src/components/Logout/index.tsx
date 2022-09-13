import auth from 'Api/auth';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './style';

const Logout: React.FC = () => {
  const { replace } = useRouter();

  const logout = async () => {
    try {
      await auth.logout();
      replace('/signin');
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 logout 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          logout();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  return <S.Logout onClick={logout}>로그아웃</S.Logout>;
};

export default Logout;
