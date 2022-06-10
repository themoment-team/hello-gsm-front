import type { NextPage } from 'next';
import { NotFoundPage, SEOHelmet } from 'components';

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
