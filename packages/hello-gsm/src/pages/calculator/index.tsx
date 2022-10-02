import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { HeaderType } from 'type/header';
import { CalculatorPage } from 'PageContainer';
import { StatusType } from 'type/user';
import user from 'Api/user';
import acceptable from 'shared/acceptable';

const Calculator: NextPage = () => {
  const seoTitle = '성적 입력';
  const desc = '지원자의 성적을 기재합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(true);
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage />
    </>
  );
};

const getInfo = async (accessToken: string) => {
  // 최종제출을 하였는지 요청
  const { data }: StatusType = await user.status(accessToken);

  if (!data.application?.isFinalSubmission) {
    // 최종제출이 안되었으면 페이지 접근 허용
    return {
      props: {},
    };
  } else {
    // 최종제출이 되어있으면 페이지 접근 불가 application 페이지로 이동
    return {
      props: {},
      redirect: {
        destination: '/application',
      },
    };
  }
};

/**
 *
 * @returns - accessToken, refreshToken 둘다 있다면 로그인 O
 * accessToken만 있다면 refresh 요청 후 로그인 O / 요청 실패 시 로그인 페이지로 이동
 * 둘다 없다면 로그인 페이지로 이동
 */
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
    if (ctx.req.cookies.accessToken) {
      return getInfo(accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        const accessToken = headers['set-cookie'][0].split(';')[0];
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return getInfo(accessToken);
      } catch (error) {
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

export default Calculator;
