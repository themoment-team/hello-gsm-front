import type { NextPage } from 'next';
import { ApplicationPage, SEOHelmet } from 'components';

const Application: NextPage = () => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage />
    </>
  );
};

export default Application;
