import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { CommonApplicationResponseType } from 'type/application';
import application from 'Api/application';
import { ApplyPage, CalculatorPage, GEDCalculatorPage } from 'PageContainer';
import { useEffect, useState } from 'react';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';
import identity from 'Api/identity';
import { IdentityType } from 'type/identity';
import useStore from 'Stores/StoreContainer';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Apply: NextPage = () => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  const { applyData } = useStore();

  const { push } = useRouter();

  usePreventBackAndClose();

  const [applicationData, setApplicationData] =
    useState<CommonApplicationResponseType>();
  const [identityData, setIdentityData] = useState<IdentityType>();

  const getApplication = async () => {
    try {
      const { data }: { data: CommonApplicationResponseType } =
        await application.getMyApplication();

      if (data.admissionStatus.isFinalSubmitted) push('/');

      setApplicationData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getIdentity = async () => {
    try {
      const { data } = await identity.getMyIdentity();
      setIdentityData(data);
    } catch (e) {
      push('/auth/signup');
      toast.info('본인인증을 먼저 진행해주세요.');
    }
  };

  useEffect(() => {
    getIdentity();
    getApplication();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {step === '원서' && (
        <ApplyPage
          applicationData={applicationData}
          identityData={identityData}
          onNext={() => setStep('성적')}
        />
      )}
      {step === '성적' &&
        (applyData?.graduation === 'GED' ? (
          <GEDCalculatorPage
            score={applicationData?.middleSchoolGrade}
            isSubmissionProp={applicationData?.middleSchoolGrade ? true : false}
          />
        ) : (
          <CalculatorPage
            score={applicationData?.middleSchoolGrade}
            isSubmissionProp={applicationData?.middleSchoolGrade ? true : false}
          />
        ))}
    </>
  );
};

export default Apply;
