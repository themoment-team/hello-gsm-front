import { SEOHelmet } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { CalculatorPage } from 'PageContainer';
import { ApplicationResponseType } from 'type/application';
import application from 'Api/application';

interface CalculatorType {
  isSubmission?: object;
}

const Calculator: NextPage<CalculatorType> = ({ isSubmission }) => {
  const seoTitle = '성적 입력';
  const desc = '지원자의 성적을 기재합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <CalculatorPage isSubmissionProp={isSubmission ? true : false} />
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
export default Calculator;
