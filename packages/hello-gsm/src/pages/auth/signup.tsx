import type { NextPage } from 'next';
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

export default SignUp;
