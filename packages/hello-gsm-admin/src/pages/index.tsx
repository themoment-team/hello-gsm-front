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
    console.log('start getList');
    const { data }: ApplicantsType = await application.getList(
      page,
      name,
      accessToken,
    );
    console.log('req');
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.adminAaccessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.adminRefreshToken}`;

  if (ctx.req.cookies.adminRefreshToken) {
    console.log('exist rt');
    if (ctx.req.cookies.adminAaccessToken) {
      console.log('exist at');
      return getList(1, accessToken, undefined);
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
      // redirect: {
      //   destination: '/signin',
      // },
    };
  }
};

export default Home;
