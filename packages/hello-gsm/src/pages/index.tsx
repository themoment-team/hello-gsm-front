import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { MainPage } from 'PageContainer';
import useStore from 'Stores/StoreContainer';
import { useEffect } from 'react';

const Home: NextPage<StatusType> = ({ data }) => {
  const seoTitle = '홈';
  const desc = '광주소프트웨어마이스터고등학교 입학 지원 서비스입니다.';

  const { setLogged } = useStore();

  useEffect(() => {
    data ? setLogged(true) : setLogged(false);
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={data} />
    </>
  );
};

export default Home;
