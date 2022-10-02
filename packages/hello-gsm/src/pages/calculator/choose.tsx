import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { HeaderType } from 'type/header';
import { CheckType } from 'type/check';
import { ChoosePage } from 'PageContainer';

const Choose: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '학생 상태 선택';
  const desc = '지원자의 학력 상태를 선택합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ChoosePage />
    </>
  );
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
      return {
        props: { check: true },
      };
    } catch (err) {
      try {
        // accessToken 만료시
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        return {
          props: { check: true },
        };
      } catch (err) {
        // 로그인 실패
        return {
          props: { check: false },
        };
      }
    }
  } else {
    // 로그인 X
    return {
      props: { check: false },
    };
  }
};

export default Choose;
