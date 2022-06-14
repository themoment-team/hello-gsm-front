import type { GetServerSideProps, NextPage } from 'next';
import { ApplicationPage, SEOHelmet } from 'components';
import application from 'Api/application';
import { ProfileType } from 'type/profile';

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: ProfileType = await application.getInformation();
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

export default Application;
