import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { FAQPage } from 'components';
import axios from 'axios';

interface FaqType {
  data: {
    question: string;
    answer: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ data }) => <FAQPage faqData={data} />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get('https://hellogsm.kr/data/faq.json');
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
