import Head from 'next/head';

interface SEOHelmetProps {
  seoTitle: string;
}

/**
 *
 * @param seoTitle - head title 값
 * @returns 검색엔진 최적화를 위한 HEAD태그
 */
const SEOHelmet = ({ seoTitle }: SEOHelmetProps) => {
  return (
    <Head>
      <title>{seoTitle} | HelloGSM</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스입니다."
      />
      <meta name="og:title" content="Hello, GSM" />
      <meta name="og:site_name" content="Hello, GSM" />
      <meta
        name="og:description"
        content="광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스입니다."
      />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://hellogsm.kr/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEOHelmet;
