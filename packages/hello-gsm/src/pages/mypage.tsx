import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';

interface DataType {
  res: { data: StatusType };
}

const MyPage: NextPage<DataType> = ({ res }) => {
  return <MypagePage status={res.data} />;
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
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default MyPage;
