import type { GetServerSideProps, NextPage } from 'next';
import application from 'Api/application';
import { ProfileType } from 'type/profile';
import { StatusType } from 'type/user';
import user from 'Api/user';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { SEOHelmet } from 'components';
import { ApplicationPage } from 'PageContainer';

interface test2 extends ProfileType {
  check: boolean;
}

const Application: NextPage<test2> = ({ data, check }) => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage data={data} />
    </>
  );
};

const getInfo = async (accessToken: string) => {
  // 최종제출을 하였는지 요청
  const { data }: StatusType = await user.status(accessToken);

  if (data.application?.isFinalSubmission) {
    try {
      // 최종제출이 완료 되었으면 원서 정보를 props로 보냄
      const { data }: ProfileType = await application.getInformation(
        accessToken,
      );
      return {
        props: {
          data,
          check: true,
        },
      };
    } catch (err: any) {
      return {
        props: { check: true },
        redirect: {
          destination: '/mypage',
        },
      };
    }
  } else {
    // 최종제출이 안되어 있으면 mypage로 이동
    return {
      props: { check: true },
      redirect: {
        destination: '/mypage',
      },
    };
  }
};

/**
 *
 * @returns 유저 상태 요청 후 최종제출 완료 시 유저 정보 요청
 * 비완료 시 마이페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async ctx => {
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;

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
          props: { check: false },
          redirect: {
            destination: '/auth/signin',
          },
        };
      }
    }
  } else {
    // 로그인 X
    return {
      props: { check: false },
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default Application;
