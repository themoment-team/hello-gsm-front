import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';
import { MypagePage } from 'PageContainer';

const MyPage: NextPage<StatusType> = ({ data }) => {
  const seoTitle = '내 정보';
  const desc = '내 정보를 확인하고 원서 관리 및 원서 출력 등을 할 수 있습니다.';
  const testImgUrl =
    'data:image/jpeg;base64,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';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {/* <MypagePage data={data} /> */}
      <MypagePage
        data={{
          name: '유시온',
          userImg: testImgUrl,
          application: null,
        }}
      />
    </>
  );
};

/**
 * 유저 상태를 요청하는 함수
 *
 * @param accessToken - accessToken을 param으로 넘겨준다
 * @returns - 유저 상태
 */
const getStatus = async (accessToken: string) => {
  try {
    const { data }: StatusType = await user.status(accessToken);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

/**
 *
 * @returns - refreshToken 비존재 시 signin redirection,
 * refreshToken 존재 시, accessToken 존재 시 요청, 비존재 시 accessToken 요청 후 status 요청
 */
export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    if (ctx.req.cookies.accessToken) {
      return getStatus(accessToken);
    } else {
      try {
        // 요청 헤더를 가저온다
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
        const accessToken = headers['set-cookie'][0].split(';')[0];
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        // headers에서 가져온 accessToken을 담아 요청을 보낸다
        return getStatus(accessToken);
      } catch (error) {
        console.log(error);
        return {
          props: {},
          // redirect: {
          //   destination: '/auth/signin',
          // },
        };
      }
    }
  } else {
    return {
      props: {},
      // redirect: {
      //   destination: '/auth/signin',
      // },
    };
  }
};

export default MyPage;
