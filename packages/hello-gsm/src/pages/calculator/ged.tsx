import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { GEDCalculatorPage } from 'PageContainer';
import application from 'Api/application';
import { ApplicationResponseType } from 'type/application';

interface GEDCalculatorPropsType {
  isSubmission?: object;
}

const GEDCalculator: NextPage<GEDCalculatorPropsType> = ({ isSubmission }) => {
  const seoTitle = '검정고시생 성적 입력';
  const desc = '검정고시생의 성적을 기재합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <GEDCalculatorPage isSubmissionProp={isSubmission ? true : false} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: { data: ApplicationResponseType } =
      await application.getMyApplication();

    // 최종재출 됐는지
    if (data.admissionStatus.isFinalSubmitted) {
      return {
        props: {},
        redirect: {
          destination: '/application',
        },
      };
    } else {
      return {
        props: {
          data: {
            isSubmission: data.admissionStatus.isFinalSubmitted,
          },
        },
      };
    }
  } catch (error) {
    return {
      props: {
        data: {},
      },
      redirect: {
        destination: '/',
      },
    };
  }
};

export default GEDCalculator;
