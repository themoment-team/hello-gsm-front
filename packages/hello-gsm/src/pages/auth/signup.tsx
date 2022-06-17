import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet, SignUpPage } from 'components';

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

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   if (ctx.req.cookies.registerToken) {
//     return {
//       props: {},
//     };
//   } else {
//     return {
//       props: {},
//       redirect: {
//         destination: '/',
//       },
//     };
//   }
// };

export default SignUp;
