import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { CalculatorPage } from 'PageContainer';

const Calculator: NextPage = () => {
  const seoTitle = '성적 입력 테스트';
  const desc = '지원자의 성적 점수를 확인할 수 있습니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage />
    </>
  );
};

export default Calculator;
