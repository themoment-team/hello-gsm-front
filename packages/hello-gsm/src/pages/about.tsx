import type { GetServerSideProps, NextPage } from 'next';
import { AboutPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';
import { CheckType } from 'type/check';
import { HeaderType } from 'type/header';

const About: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '팀 소개';
  const desc = 'Hello, GSM 서비스를 제작한 themoment-team을 소개합니다.';
  const { setLogged } = useStore();
  console.log(check);
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <AboutPage />
    </>
  );
};

const check = async (accessToken: string) => {
  try {
    await auth.check(accessToken);
    return {
      props: {
        check: true,
      },
    };
  } catch (error) {
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
      return check(accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
        const accessToken = headers['set-cookie'][0].split(';')[0];
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        // headers에서 가져온 accessToken을 담아 요청을 보낸다
        return check(accessToken);
      } catch (errer) {
        return {
          props: { check: false },
          redirect: {},
        };
      }
    }
  } else {
    return {
      props: { check: false },
    };
  }
};

export default About;
