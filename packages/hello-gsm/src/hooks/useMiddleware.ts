import { useRouter } from 'next/router';
import user from 'Api/user';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const useMiddleware = async () => {
  const { push, pathname } = useRouter();
  const applicationFormURL = [
    '/information',
    '/apply',
    '/mypage',
    '/application',
    '/auth/signup',
  ];

  useEffect(() => {
    const getInfo = async () => {
      if (applicationFormURL.includes(pathname))
        try {
          await user.getMyInfo();
        } catch (error) {
          push('/auth/signin');
          toast.info('로그인을 해주세요.');
        }
    };

    getInfo();
  }, []);
};
