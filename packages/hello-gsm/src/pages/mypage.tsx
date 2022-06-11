import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage, SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import auth from 'Api/auth';
import axios from 'axios';

interface DataType {
  res: { data: StatusType };
}

const MyPage: NextPage<DataType> = ({ res }) => {
  const seoTitle = '내 정보';
  const desc = '원서 삭제, 원서 수정, 최종 제출 등을 할 수 있습니다. ';
  console.log(res);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage status={res.data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  // if (ctx.req.cookies.refreshToken) {
  //   if (ctx.req.cookies.accessToken) {
  //     try {
  //       const res = await user.status(accessToken);
  //       console.log(res);
  //       return {
  //         props: {
  //           res,
  //         },
  //       };
  //     } catch (error) {
  //       console.log(error);
  //       return {
  //         props: {},
  //       };
  //     }
  //   } else {
  //     try {
  //       await auth.refresh(refreshToken);
  //       return getServerSideProps(ctx);
  //     } catch (error) {
  //       console.log(error);
  //       return {
  //         props: {},
  //       };
  //     }
  //   }
  // } else {
  //   return {
  //     props: {},
  //     redirect: {
  //       destination: '/auth/signin',
  //     },
  //   };
  // }
  try {
    const res = await axios.get('https://server.hellogsm.kr/user', {
      headers: { cookie: accessToken },
    });
    console.log(res);
    return {
      props: {
        res,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default MyPage;
