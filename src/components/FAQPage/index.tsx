import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
// import * as S from './style';

interface FAQType {
  faqData: {
    title: string;
    content: string;
  }[];
}

const FAQPage: NextPage<FAQType> = ({ faqData }) => {
  console.log(faqData);

  return (
    <>
      <Header />
    </>
  );
};

export default FAQPage;
