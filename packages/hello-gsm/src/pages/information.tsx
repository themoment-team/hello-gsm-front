import type { GetServerSideProps, NextPage } from 'next';
import { InformationPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';

const Information: NextPage = () => {
  const seoTitle = '유의사항 및 입학 절차';
  const desc = '지원하기 전 유의사항 및 입학 절차를 설명합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <InformationPage />
    </>
  );
};

const check = async (accessToken: string) => {
  try {
    await auth.check(accessToken);
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
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
