import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { ChoosePage } from 'PageContainer';

const Home: NextPage = () => {
  const seoTitle = '성적 입력 테스트';
  const desc = '광주소프트웨어마이스터고등학교 지원자의 성적점수를 계산합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ChoosePage />
    </>
  );
};

export default Home;
