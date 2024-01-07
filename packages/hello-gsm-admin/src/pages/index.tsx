import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import user from 'Api/user';
import { MainPage } from 'PageContainer';
import { UserInfoType } from 'type/user';

import { SEOHelmet } from 'components';

const Home: NextPage = () => {
  const seoTitle = '홈';
  const desc = '지원자들의 정보를 확인합니다.';

  const { query, push } = useRouter();

  useEffect(() => {
    const isVerification = query.verification === 'true';

    if (isVerification) {
      toast.success('로그인 되었습니다.');
      push('/');
    }
  }, [query]);

  const getAuthority = async () => {
    try {
      const { data }: { data: UserInfoType } = await user.getMyInfo();
      if (data.role !== 'ROLE_ADMIN') push('/signin');
    } catch (error) {
      toast.error('로그인을 해주세요.');
      push('/signin');
    }
  };

  useEffect(() => {
    getAuthority();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage />
    </>
  );
};

export default Home;
