import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';
import { ManualPage } from 'PageContainer';
import { useEffect } from 'react';
import { CheckType } from 'type/check';
import useStore from 'Stores/StoreContainer';

const Manual: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '매뉴얼 설명';
  const desc = 'Hello, GSM 서비스의 매뉴얼을 설명합니다.';

  const { setLogged } = useStore();

  useEffect(() => {
    setLogged(check);
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ManualPage />
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

export default Manual;
