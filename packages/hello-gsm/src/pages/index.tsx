import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { MainPage } from 'PageContainer';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';

const Home: NextPage<StatusType> = ({ data }) => {
  const seoTitle = '홈';
  const desc = '광주소프트웨어마이스터고등학교 입학 지원 서비스입니다.';

  const { setLogged } = useStore();

  useEffect(() => {
    data ? setLogged(true) : setLogged(false);
  });

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={data} />
    </>
  );
};

const getStatus = async (accessToken: string) => {
  try {
    const { data }: StatusType = await user.status(accessToken);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    if (ctx.req.cookies.accessToken) {
      return getStatus(accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        const accessToken = headers['set-cookie'][0].split(';')[0];
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return getStatus(accessToken);
      } catch (error) {
        console.log(error);
        return {
          props: {},
        };
      }
    }
  } else {
    return {
      props: {},
    };
  }
};

export default Home;
