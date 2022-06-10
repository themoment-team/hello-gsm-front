import type { NextPage } from 'next';
import { MypagePage, SEOHelmet } from 'components';

const MyPage: NextPage = () => {
  const seoTitle = '내 정보';
  const desc = '원서 삭제, 원서 수정, 최종 제출 등을 할 수 있습니다. ';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage />
    </>
  );
};

export default MyPage;
