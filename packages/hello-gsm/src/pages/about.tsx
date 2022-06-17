import type { GetServerSideProps, NextPage } from 'next';
import { AboutPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';

const About: NextPage = ({ data }) => {
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  try {
    const { data } = await auth.check(accessToken);
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
