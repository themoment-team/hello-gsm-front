import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { SignInPage } from 'PageContainer';
import user from 'Api/user';

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await user.getMyInfo();
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default SignIn;
