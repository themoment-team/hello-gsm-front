import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import { ApplicantsType } from 'Types/application';
import application from 'Api/application';

const Home: NextPage<ApplicantsType> = ({ data }) => {
  const seoTitle = '홈';
  const desc = '지원자들의 정보를 확인합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: any = await application.getList(1);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: 'signin' },
    };
  }
};

export default Home;
