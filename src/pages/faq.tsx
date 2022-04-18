import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import FAQPage from 'components/FAQPage';
import axios from 'axios';

interface FaqType {
  data: {
    title: string;
    content: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ data }) => <FAQPage faqData={data} />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/data/faq.json');
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Faq;
