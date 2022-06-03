import Head from 'next/head';

interface SEOHelmetProps {
  seoTitle: string;
}

const SEOHelmet = ({ seoTitle }: SEOHelmetProps) => {
  return (
    <Head>
      <title>{seoTitle} | HelloGSM</title>
    </Head>
  );
};

export default SEOHelmet;
