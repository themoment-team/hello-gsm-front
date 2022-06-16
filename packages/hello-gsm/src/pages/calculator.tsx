import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { HeaderType } from 'type/header';
import CalculatorPage from '../components/CalculatorPage';

const Calculator: NextPage = () => {
  const seoTitle = '성적 입력';
  const desc = '지원자의 성적을 기재합니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage />
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

  try {
    const { data } = await auth.check(accessToken);
    return {
      props: {},
    };
  } catch (err) {
    if (refreshToken) {
      // 요청 헤더를 가저온다
      const { headers }: HeaderType = await auth.refresh(refreshToken);
      // 브라우저에 쿠키들을 저장한다
      ctx.res.setHeader('set-cookie', headers['set-cookie']);
      return {
        props: {},
      };
    } else {
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
