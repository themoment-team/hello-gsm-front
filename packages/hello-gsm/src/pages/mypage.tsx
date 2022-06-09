import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';

interface DataType {
  data: StatusType;
}

const MyPage: NextPage<DataType> = ({ data }) => {
  return <MypagePage status={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await user.status();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default MyPage;
