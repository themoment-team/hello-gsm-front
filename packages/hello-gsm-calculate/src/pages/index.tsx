import type { NextPage } from 'next';
import { CalculatorPage, SEOHelmet } from 'components';

const Home: NextPage = () => {
  const seoTitle = '모의성적 입력';
  const desc = '모의성적 입력 페이지입니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage></CalculatorPage>
    </>
  );
};

export default Home;
