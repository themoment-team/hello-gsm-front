import auth from 'Api/auth';
import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { CheckType } from 'type/check';
import { ChoosePage } from 'PageContainer';

const Choose: NextPage<CheckType> = ({ check }) => {
  const seoTitle = '학생 상태 선택';
  const desc = '지원자의 학력 상태를 선택합니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ChoosePage />
    </>
  );
};

export default Choose;
