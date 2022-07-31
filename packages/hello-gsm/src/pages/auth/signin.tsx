import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { SignInPage } from 'PageContainer';

const SignIn: NextPage = () => {
  const seoTitle = '로그인';
  const desc = '로그인 페이지입니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SignInPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  if (ctx.req.cookies.accessToken || ctx.req.cookies.refreshToken) {
    return {
      props: {},
      redirect: { destination: '/' },
    };
  } else return { props: {} };
};

export default SignIn;
