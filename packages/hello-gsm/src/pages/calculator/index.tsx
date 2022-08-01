import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { HeaderType } from 'type/header';
import { CalculatorPage } from 'PageContainer';
import { CheckType } from 'type/check';
import { StatusType } from 'type/user';
import user from 'Api/user';

const Calculator: NextPage<CheckType> = () => {
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
 * @returns - 로그인 여부 확인 후 요청 성공 시 페이지 접근 가능
 * accessToken이 없어 에러가 난다면 refresh 요청 후 접근 가능
 * refreshToken도 없을 경우 로그인페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    try {
      // 로그인 O
      await auth.check(accessToken);
      return getInfo(accessToken);
    } catch (err) {
      try {
        // 요청 헤더를 가저온다
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
        const accessToken = headers['set-cookie'][0].split(';')[0];
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        // headers에서 가져온 accessToken을 담아 요청을 보낸다
        return getInfo(accessToken);
      } catch (err) {
        // 로그인 실패
        return {
          props: {},
          redirect: {
            destination: '/auth/signin',
          },
        };
      }
    }
  } else {
    // 로그인 X
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }

  try {
    // 로그인 O
    await auth.check(accessToken);
    return getInfo(accessToken);
  } catch (err) {
    try {
      // 요청 헤더를 가저온다
      const { headers }: HeaderType = await auth.refresh(refreshToken);
      // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
      const accessToken = headers['set-cookie'][0].split(';')[0];
      // 브라우저에 쿠키들을 저장한다
      ctx.res.setHeader('set-cookie', headers['set-cookie']);
      // headers에서 가져온 accessToken을 담아 요청을 보낸다
      return getInfo(accessToken);
    } catch (err) {
      // 로그인 실패
      return {
        props: {},
        redirect: {
          destination: '/auth/signin',
        },
      };
    }
  }
};

export default Calculator;
