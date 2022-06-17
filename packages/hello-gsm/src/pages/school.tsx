import type { GetServerSideProps, NextPage } from 'next';
import { SchoolPage, SEOHelmet } from 'components';
import auth from 'Api/auth';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';
import { CheckType } from 'type/check';

const School: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '학교 소개';
  const desc = '광주소프트웨어마이스터고등학교를 소개합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SchoolPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  try {
    await auth.check(accessToken);
    return {
      props: {
        check: true,
      },
    };
  } catch (error: any) {
    return {
      props: {
        check: false,
      },
    };
  }
};

export default School;
