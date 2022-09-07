import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { BrowserPage } from 'PageContainer';

const Browser: NextPage = () => {
  const seoTitle = '크롬 권장';
  const desc = '구글 크롬 브라우저를 이용해서 접속해 주시기 바랍니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <BrowserPage />
    </>
  );
};

export default Browser;
