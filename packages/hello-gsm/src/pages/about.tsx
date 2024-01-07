import type { NextPage } from 'next';

import { AboutPage } from 'pageContainer';

import { SEOHelmet } from 'components';

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
