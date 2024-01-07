import type { NextPage } from 'next';

import { ManualPage } from 'pageContainer';

import { SEOHelmet } from 'components';

const Manual: NextPage = () => {
  const seoTitle = '매뉴얼 설명';
  const desc = 'Hello, GSM 서비스의 매뉴얼을 설명합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ManualPage />
    </>
  );
};

export default Manual;
