import type { GetServerSideProps, NextPage } from 'next';
import { MypagePage, SEOHelmet } from 'components';
import user from 'Api/user';
import { StatusType } from 'type/user';
import auth from 'Api/auth';
import { HeaderType } from 'type/header';

const MyPage: NextPage<StatusType> = ({ data }) => {
  const seoTitle = '내 정보';
  const desc = '원서 삭제, 원서 수정, 최종 제출 등을 할 수 있습니다. ';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage data={data} />
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
