import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { HeaderType } from 'type/header';
import { CheckType } from 'type/check';
import { TestGEDCalculatorPage } from 'PageContainer';

const TestGEDCalculator: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '성적 입력 테스트';
  const desc = '검정고시 지원자의 성적 점수를 확인할 수 있습니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TestGEDCalculatorPage />
    </>
  );
};

export default TestGEDCalculator;
