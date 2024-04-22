import type { NextPage } from 'next';

import { SEOHelmet } from 'components';

import { SchoolPage } from 'pageContainer';

const School: NextPage = () => {
  const seoTitle = '학교 소개';
  const desc = '광주소프트웨어마이스터고등학교를 소개합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SchoolPage />
    </>
  );
};

export default School;
