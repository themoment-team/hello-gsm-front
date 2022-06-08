import type { NextPage } from 'next';
import { MainPage, SEOHelmet } from 'components';

const Home: NextPage = () => {
  const seoTitle = '홈';
  const desc = '입학 일정을 설명합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage />
    </>
  );
};

export default Home;
