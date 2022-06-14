import React from 'react';
import type { NextPage } from 'next';
import { ApplyPage, SEOHelmet } from 'components';

const Apply: NextPage = () => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplyPage />
    </>
  );
};

export default Apply;
