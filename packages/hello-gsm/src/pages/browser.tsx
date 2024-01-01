import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { BrowserPage } from 'pageContainer';

const NotFound: NextPage = () => {
  const seoTitle = '크롬 권장';
  const desc = '접근할 수 없는 페이지입니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <BrowserPage />
    </>
  );
};

export default NotFound;
