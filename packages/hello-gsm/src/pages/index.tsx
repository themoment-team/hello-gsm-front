import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import application from 'Api/application';
import { ApplicationDataType } from 'type/application';

const Home: NextPage<ApplicationDataType> = ({ data }) => {
  const seoTitle = '홈';
  const desc = '광주소프트웨어마이스터고등학교 입학 지원 서비스입니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: ApplicationDataType = await application.getMyApplication();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
