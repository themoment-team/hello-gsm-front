import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import { ApplicantsType } from 'Types/application';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const seoTitle = '홈';
  const desc = '지원자들의 정보를 확인합니다.';

  const { query } = useRouter();

  useEffect(() => {
    const isVerification = query.verification === 'true';

    if (isVerification) {
      toast.success('로그인 되었습니다.');
    }
  });

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage />
    </>
  );
};

export default Home;
