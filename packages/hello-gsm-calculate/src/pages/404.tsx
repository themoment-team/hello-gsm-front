import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { NotFoundPage } from 'PageContainer';

const NotFound: NextPage = () => {
  const seoTitle = 'NOT FOUND';
  const desc = '접근할 수 없는 페이지입니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <NotFoundPage />
    </>
  );
};

export default NotFound;
