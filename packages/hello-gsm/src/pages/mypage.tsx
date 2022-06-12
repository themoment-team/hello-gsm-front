import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage, SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import auth from 'Api/auth';

interface DataType {
  data: StatusType;
}

const MyPage: NextPage<DataType> = ({ data }) => {
  const seoTitle = '내 정보';
  const desc = '원서 삭제, 원서 수정, 최종 제출 등을 할 수 있습니다. ';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage status={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    if (ctx.req.cookies.accessToken) {
      try {
        const { data }: DataType = await user.status(accessToken);
        return {
          props: {
            data,
          },
        };
      } catch (error) {
        console.log(error);
        return {
          props: {},
        };
      }
    } else {
      try {
        const { headers }: any = await auth.refresh(refreshToken);

        console.log('log checking');
        console.log('log checking 2');

        ctx.res.setHeader('set-cookie', headers['set-cookie']);

        try {
          const { data }: DataType = await user.status(
            `accessToken=${headers['set-cookie']['accessToken']}`,
          );
          return {
            props: {
              data,
            },
          };
        } catch (error) {
          console.log(error);
          return {
            props: {},
          };
        }
      } catch (error) {
        console.log(error);
        return {
          props: {},
        };
      }
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default MyPage;
