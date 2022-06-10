import type { NextPage } from 'next';
import { SEOHelmet, SignInPage } from 'components';

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

export default SignIn;
