import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { GEDCalculatorPage } from 'PageContainer';

const GEDCalcaulator: NextPage = () => {
  const seoTitle = '검정고시생 성적 입력 테스트';
  const desc = '검정고시 지원자의 성적 점수를 확인할 수 있습니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <GEDCalculatorPage />
    </>
  );
};

export default GEDCalcaulator;
