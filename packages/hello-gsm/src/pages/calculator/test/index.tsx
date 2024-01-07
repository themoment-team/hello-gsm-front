import type { NextPage } from 'next';

import { TestCalculatorPage } from 'pageContainer';

import { SEOHelmet } from 'components';

const TestCalculator: NextPage = () => {
  const seoTitle = '성적 입력 테스트';
  const desc = '지원자의 성적 점수를 확인할 수 있습니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TestCalculatorPage />
    </>
  );
};

export default TestCalculator;
