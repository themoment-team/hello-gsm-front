import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { SignUpPage } from 'PageContainer';

const SignUp: NextPage = () => {
  const seoTitle = '회원가입';
  const desc = '회원가입 페이지입니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SignUpPage />
    </>
  );
};

// registerToken이 있을 때만 회원가입 페이지 접근 가능
export const getServerSideProps: GetServerSideProps = async ctx => {
  if (ctx.req.cookies.registerToken) {
    return {
      props: {},
    };
  } else {
    return {
      props: {},
      redirect: {
        destination: '/auth/signup',
      },
    };
  }
};

export default SignUp;
