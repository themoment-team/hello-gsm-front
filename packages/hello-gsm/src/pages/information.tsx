import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { InformationPage } from 'PageContainer';
import { ssrMiddleware } from 'Utils/ssrMiddleware';

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

// export const getServerSideProps: GetServerSideProps = async () => {
//   return ssrMiddleware();
// };

export default Information;
