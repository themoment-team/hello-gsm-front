import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { AboutPage } from 'pageContainer';

const About: NextPage = () => {
  const seoTitle = '팀 소개';
  const desc = 'Hello, GSM 서비스를 제작한 themoment-team을 소개합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <AboutPage />
    </>
  );
};

export default About;
