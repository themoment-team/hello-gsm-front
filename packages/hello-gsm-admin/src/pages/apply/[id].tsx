import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import {
  ApplicationResponseType,
  CommonApplicationResponseType,
} from 'type/application';
import { ApplyPage, CalculatorPage, GEDCalculatorPage } from 'PageContainer';
import { useEffect, useState } from 'react';
import { usePreventBackAndClose } from 'hooks/usePreventBackAndClose';
import { IdentityType } from 'type/identity';
import { useRouter } from 'next/router';
import useApplyStore from 'Stores/ApplyStoreContainer';
import application from 'Api/application';

const Apply: NextPage = () => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  const { applyData } = useApplyStore();

  const { query } = useRouter();

  usePreventBackAndClose();

  const [applicationData, setApplicationData] =
    useState<ApplicationResponseType>();
  const [identityData, setIdentityData] = useState<IdentityType>();

  const getApplication = async () => {
    try {
      const { data }: { data: ApplicationResponseType } =
        await application.getUserApplication(query.id as string);

      setApplicationData(data);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(applicationData);

  useEffect(() => {
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
          <GEDCalculatorPage score={applicationData?.middleSchoolGrade} />
        ) : (
          <CalculatorPage score={applicationData?.middleSchoolGrade} />
        ))}
    </>
  );
};

export default Apply;
