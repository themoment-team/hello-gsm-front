import { SEOHelmet } from 'components';
import type { NextPage } from 'next';
import { CheckType } from 'type/check';
import { TestGEDCalculatorPage } from 'PageContainer';

const TestGEDCalculator: NextPage<CheckType> = () => {
  const seoTitle = '성적 입력 테스트';
  const desc = '검정고시 지원자의 성적 점수를 확인할 수 있습니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TestGEDCalculatorPage />
    </>
  );
};

export default TestGEDCalculator;
