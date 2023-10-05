import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import user from 'Api/user';
import { UserInfoType } from 'type/user';

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
      if (data.role !== 'ROLE_ADMIN') push('/auth/signin');
    } catch (error) {
      toast.error('로그인을 해주세요.');
      push('/auth/signin');
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
