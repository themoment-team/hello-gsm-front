import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { HeaderType } from 'type/header';
import { GraduateCalculatorPage } from 'PageContainer';
import { StatusType } from 'type/user';
import user from 'Api/user';

const GraduateCalculator: NextPage = () => {
  const seoTitle = '성적 입력';
  const desc = '지원자의 성적을 기재합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(true);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <GraduateCalculatorPage />
    </>
  );
};

export default GraduateCalculator;
