import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { ChoosePage } from 'PageContainer';

const Home: NextPage = ({ userAgent }) => {
  const seoTitle = '성적 입력 테스트';
  const desc = '광주소프트웨어마이스터고등학교 지원자의 성적점수를 계산합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ChoosePage test={userAgent} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent: string = req.headers['sec-ch-ua'].split(';')[0];
  console.log(userAgent);
  return {
    props: { userAgent },
  };
};
export default Home;
