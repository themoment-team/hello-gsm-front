import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import { ApplicantsType } from 'Types/application';
import application from 'Api/application';
import auth from 'Api/auth';
import HeaderType from 'Types/header';

const Home: NextPage<ApplicantsType> = ({ list, count }) => {
  const seoTitle = '홈';
  const desc = '지원자들의 정보를 확인합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage list={list} count={count} />
    </>
  );
};

const getListAndCount = async (accessToken: string) => {
  try {
    const [list, count] = await Promise.all([
      application.getList(1, '', accessToken),
      application.getCount(accessToken),
    ]);
    return {
      props: { list: list.data, count: count.data.count },
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
      return getListAndCount(accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        const accessToken = headers['set-cookie'][0].split(';')[0];
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return getListAndCount(accessToken);
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
