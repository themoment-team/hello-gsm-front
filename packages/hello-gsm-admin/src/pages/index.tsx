import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import { ApplicantsType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import HeaderType from 'Types/header';

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

const getList = async (page: number, accessToken: string, name?: string) => {
  try {
    const { data }: ApplicantsType = await application.getList(
      page,
      name,
      accessToken,
    );
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/signin',
      },
    };
  }
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `adminAccessToken=${ctx.req.cookies.adminAccessToken}`;
  const refreshToken = `adminRefreshToken=${ctx.req.cookies.adminRefreshToken}`;

  if (ctx.req.cookies.adminRefreshToken) {
    if (ctx.req.cookies.adminAccessToken) {
      return getList(1, accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        const accessToken = headers['set-cookie'][0].split(';')[0];
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return getList(1, accessToken);
      } catch (error) {
        return {
          props: {},
        };
      }
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/signin',
      },
    };
  }
};

export default Home;
