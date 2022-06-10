import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage, SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';

interface DataType {
  res: { data: StatusType };
}

const MyPage: NextPage<DataType> = ({ res }) => {
  const seoTitle = '내 정보';
  const desc = '원서 삭제, 원서 수정, 최종 제출 등을 할 수 있습니다. ';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage status={res.data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await user.status();
    return {
      props: {
        res,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default MyPage;
