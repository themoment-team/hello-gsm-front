import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import FAQPage from 'components/FAQPage';

interface FaqType {
  faqData: {
    title: string;
    content: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ faqData }) => {
  return (
    <>
      <FAQPage faqData={faqData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const faqData = await (
      await fetch('http://localhost:3000/data/faq.json')
    ).json();
    return {
      props: {
        faqData,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Faq;
