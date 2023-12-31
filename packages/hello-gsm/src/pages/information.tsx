import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { InformationPage } from 'pageContainer';

const Information: NextPage = () => {
  const seoTitle = '유의사항 및 입학 절차';
  const desc = '지원하기 전 유의사항 및 입학 절차를 설명합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <InformationPage />
    </>
  );
};

export default Information;
