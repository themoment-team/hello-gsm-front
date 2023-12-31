import { SEOHelmet } from 'components';
import type { NextPage } from 'next';
import { ChoosePage } from 'pageContainer';

const Choose: NextPage = () => {
  const seoTitle = '학생 상태 선택';
  const desc = '지원자의 학력 상태를 선택합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ChoosePage />
    </>
  );
};

export default Choose;
