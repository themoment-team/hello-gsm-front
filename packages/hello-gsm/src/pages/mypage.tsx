import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MypagePage } from 'PageContainer';
import application from 'Api/application';
import { ApplicationResponseType } from 'type/application';

const MyPage: NextPage<{ data: ApplicationResponseType }> = ({ data }) => {
  const seoTitle = '내 정보';
  const desc = '내 정보를 확인하고 원서 관리 및 원서 출력 등을 할 수 있습니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage data={data} />
    </>
  );
};

/**
 *
 * @returns - refreshToken 비존재 시 signin redirection,
 * refreshToken 존재 시, accessToken 존재 시 요청, 비존재 시 accessToken 요청 후 status 요청
 */
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: { data: ApplicationResponseType } =
      await application.getMyApplication();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default MyPage;
