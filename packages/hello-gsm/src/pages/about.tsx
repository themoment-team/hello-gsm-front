import type { GetServerSideProps, NextPage } from 'next';
import { AboutPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';

const About: NextPage<CheckType> = ({ data }) => {
  const seoTitle = '팀 소개';
  const desc = 'Hello, GSM 서비스를 제작한 themoment-team을 소개합니다.';
  console.log(data);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <AboutPage />
    </>
  );
};

interface CheckType {
  data: string;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  try {
    const { data }: CheckType = await auth.check(accessToken);
    return {
      props: { data },
    };
  } catch (error: any) {
    return {
      props: {},
    };
  }
};
export default About;
