import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';
import { ManualPage } from 'PageContainer';

const Manual: NextPage = () => {
  const seoTitle = '매뉴얼 설명';
  const desc = 'Hello, GSM 서비스의 매뉴얼을 설명합니다.';

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
      await auth.check(accessToken);
      return {
        props: {},
      };
    } catch (error) {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return {
          props: {},
        };
      } catch (errer) {
        return {
          props: {},
          redirect: {
            destination: '/auth/signin',
          },
        };
      }
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default Information;
