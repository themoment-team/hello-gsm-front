import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { application, identity } from 'apis';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';
import { ApplyPage, CalculatorPage, GEDCalculatorPage } from 'pageContainer';
import useStore from 'stores/StoreContainer';

import { SEOHelmet } from 'components';

import { CommonApplicationResponseType } from 'types/application';
import { IdentityType } from 'types/identity';

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
