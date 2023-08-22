import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import {
  ApplicationDataType,
  CommonApplicationResponseType,
} from 'type/application';
import application from 'Api/application';
import { ApplyPage, CalculatorPage } from 'PageContainer';
import { useState } from 'react';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';
import identity from 'Api/identity';
import { IdentityType } from 'type/identity';

interface ApplyProps {
  applicationData: CommonApplicationResponseType;
  identityData: IdentityType;
}

const Apply: NextPage<ApplyProps> = ({ applicationData, identityData }) => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  // usePreventBackAndClose();

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {step === '원서' && (
        <ApplyPage
          data={applicationData}
          identityData={identityData}
          onNext={() => setStep('성적')}
        />
      )}
      {step === '성적' && (
        <CalculatorPage
          isSubmissionProp={applicationData?.middleSchoolGrade ? true : false}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: applicationData }: ApplicationDataType =
      await application.getMyApplication();
    const { data: identityData }: { data: IdentityType } =
      await identity.getMyIdentity();

    if (applicationData.admissionStatus.isFinalSubmitted) {
      return {
        props: {},
        redirect: {
          destination: '/',
        },
      };
    } else {
      return {
        props: {
          applicationData,
          identityData,
        },
      };
    }
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Apply;
