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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    try {
      // 로그인 O
      await auth.check(accessToken);
      return {
        props: {
          check: true,
        },
      };
    } catch (err) {
      try {
        // accessToken 만료시
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return {
          props: {
            check: true,
          },
        };
      } catch (err) {
        // 로그인 실패
        return {
          props: {
            check: false,
          },
        };
      }
    }
  } else {
    // 로그인 X
    return {
      props: {
        check: false,
      },
    };
  }
};

export default About;
