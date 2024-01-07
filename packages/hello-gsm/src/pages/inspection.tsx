import { NextPage } from 'next';

import { InspectionPage } from 'pageContainer';

import { SEOHelmet } from 'components';

const Inspection: NextPage = () => {
  const seoTitle = '점검 중';
  const desc = '점검 중 입니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <InspectionPage />
    </>
  );
};

export default Inspection;
