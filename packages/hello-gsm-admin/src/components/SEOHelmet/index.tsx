import Head from 'next/head';

interface SEOHelmetProps {
  seoTitle: string;
  desc: string;
}

/**
 *
 * @param seoTitle - page 제목
 * @param desc - page 설명
 * @returns 검색엔진 최적화를 위한 HEAD태그
 */
const SEOHelmet = ({ seoTitle, desc }: SEOHelmetProps) => {
  return (
    <Head>
      <title>
        {seoTitle} | 광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스
      </title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="광주소프트웨어마이스터고등학교,신입생입학지원"
      />
      <meta name="author" content="themoment-team" />
      <meta name="description" content={desc} />

      <meta
        name="og:title"
        content="광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스"
      />
      <meta
        name="og:site_name"
        content="광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스"
      />
      <meta name="og:description" content={desc} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://hellogsm.kr" />
      <meta property="og:image" content="https://hellogsm.kr/thumbnail.png" />

      <meta
        name="twitter:title"
        content="광주소프트웨어마이스터고등학교 신입생 입학 지원 서비스"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://hellogsm.kr" />
      <meta name="twitter:creator" content="themoment-team" />
      <meta name="twitter:image" content="https://hellogsm.kr/thumbnail.png" />
    </Head>
  );
};

export default SEOHelmet;
