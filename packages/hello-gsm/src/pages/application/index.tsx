import type { GetServerSideProps, NextPage } from 'next';
import { ApplicationPage, SEOHelmet } from 'components';
import application from 'Api/application';
import { ProfileType } from 'type/profile';
import { StatusType } from 'type/user';
import user from 'Api/user';

const Application: NextPage<ProfileType> = ({ data }) => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage data={data} />
    </>
  );
};

const getInfo = async () => {
  try {
    const { data }: ProfileType = await application.getInformation();
    return {
      props: {
        data,
      },
    };
  } catch (err: any) {
    console.error(err);
    return {
      props: {},
    };
  }
};

/**
 *
 * @returns 유저 상태 요청 후 최종제출 완료 시 유저 정보 요청
 * 비완료 시 마이페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;

  const { data }: StatusType = await user.status(accessToken);
  if (data.application?.isFinalSubmission) {
    try {
      return getInfo();
    } catch (err: any) {
      return {
        props: {},
        redirect: {
          destination: '/auth/signin',
        },
      };
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/mypage',
      },
    };
  }
};

export default Application;
