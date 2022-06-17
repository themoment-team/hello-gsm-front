import type { GetServerSideProps, NextPage } from 'next';
import { AboutPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';

interface CheckType {
  data: boolean;
}

const About: NextPage<CheckType> = ({ data }) => {
  const seoTitle = '팀 소개';
  const desc = 'Hello, GSM 서비스를 제작한 themoment-team을 소개합니다.';
  const { setLogged } = useStore();
  setLogged(data);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <AboutPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  try {
    await auth.check(accessToken);
    return {
      props: {
        data: true,
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: false,
      },
    };
  }
};
export default About;
