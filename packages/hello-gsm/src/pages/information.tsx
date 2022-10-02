import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';
import { InformationPage } from 'PageContainer';
import acceptable from 'shared/acceptable';

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

export const getServerSideProps: GetServerSideProps = async ctx => {
  // 접수 기간이 아니면 페이지 접근 불가
  if (!acceptable) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

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
