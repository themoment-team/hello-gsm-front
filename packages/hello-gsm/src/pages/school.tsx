import type { GetServerSideProps, NextPage } from 'next';
import { SchoolPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';
import { CheckType } from 'type/check';
import { HeaderType } from 'type/header';

const School: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '학교 소개';
  const desc = '광주소프트웨어마이스터고등학교를 소개합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SchoolPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  if (ctx.req.cookies.refreshToken) {
    if (ctx.req.cookies.accessToken) {
      // 로그인 O
      await auth.check(accessToken);
      return {
        props: {
          check: true,
        },
      };
    } else {
      // accessToken 만료 시
      // 요청 헤더를 가저온다
      const { headers }: HeaderType = await auth.refresh(refreshToken);
      // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
      const accessToken = headers['set-cookie'][0].split(';')[0];
      // 브라우저에 쿠키들을 저장한다
      ctx.res.setHeader('set-cookie', headers['set-cookie']);
      // headers에서 가져온 accessToken을 담아 요청을 보낸다
      await auth.check(accessToken);
      return {
        props: {
          check: true,
        },
      };
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

export default School;
