import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { TicketPage } from 'PageContainer';

const SignIn: NextPage = () => {
  const seoTitle = '수험표 출력';
  const desc = '지원자들의 수험표를 출력하는 페이지입니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TicketPage />
    </>
  );
};

export default SignIn;
