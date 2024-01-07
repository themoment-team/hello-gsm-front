import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { user } from 'apis';
import { SignInPage } from 'pageContainer';

import { SEOHelmet } from 'components';

import { UserInfoType } from 'types/user';

const SignIn: NextPage = () => {
  const seoTitle = '로그인';
  const desc = '로그인 페이지입니다.';

  const { push } = useRouter();

  const getUser = async () => {
    try {
      const { data }: { data: UserInfoType } = await user.getMyInfo();
      if (data.role === 'ROLE_UNAUTHENTICATED') {
        push('/auth/signup');
        toast.info('본인인증을 진행해주세요.');
      } else if (data.role === 'ROLE_USER') {
        push('/');
        toast.info(
          '로그인 되어있어요. 새로 로그인하려면 로그아웃을 시도해주세요.',
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SignInPage />
    </>
  );
};

export default SignIn;
