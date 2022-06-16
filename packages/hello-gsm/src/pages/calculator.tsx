import { SEOHelmet } from 'components';
import type { NextPage } from 'next';
import CalculatorPage from '../components/CalculatorPage';

const Calculator: NextPage = () => {
  const seoTitle = '성적 입력';
  const desc = '지원자의 성적을 기재합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage />
    </>
  );
};

export default Calculator;
