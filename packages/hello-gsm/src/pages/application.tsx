import type { GetServerSideProps, NextPage } from 'next';
import application from 'Api/application';
import { SEOHelmet } from 'components';
import { ApplicationPage } from 'PageContainer';
import { ApplicationDataType } from 'type/application';

const Application: NextPage<ApplicationDataType> = ({ data }) => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage data={data} />
    </>
  );
};

/**
 *
 * @returns 유저 상태 요청 후 최종제출 완료 시 유저 정보 요청
 * 비완료 시 마이페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // 최종제출이 완료 되었으면 원서 정보를 props로 보냄
    const { data }: ApplicationDataType = await application.getMyApplication();

    if (data.admissionStatus.isFinalSubmitted) {
      return {
        props: { data },
      };
    } else
      return {
        props: {},
        redirect: {
          destination: '/mypage',
        },
      };
  } catch (err: any) {
    return {
      props: {},
      redirect: {
        destination: '/mypage',
      },
    };
  }
};

export default Application;
