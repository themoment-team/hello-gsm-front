import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { CalculatorPage } from 'pageContainer';

const Calculator: NextPage = () => {
  const seoTitle = '졸업자 & 졸업예정 학생 성적 입력 테스트';
  const desc = '졸업자 & 졸업예정 지원자의 성적 점수를 확인할 수 있습니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage />
    </>
  );
};

export default Calculator;
