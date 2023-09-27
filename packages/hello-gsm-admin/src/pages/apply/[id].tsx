import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { ApplicationResponseType } from 'type/application';
import { ApplyPage, CalculatorPage, GEDCalculatorPage } from 'PageContainer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useApplyStore from 'Stores/ApplyStoreContainer';
import application from 'Api/application';
import { css, Global } from '@emotion/react';

const Apply: NextPage = () => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  const { applyData } = useApplyStore();

  const { query } = useRouter();

  const [applicationData, setApplicationData] =
    useState<ApplicationResponseType>();

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
      <Global
        styles={css`
          html {
            background: red;
          }
        `}
      />
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {step === '원서' && (
        <ApplyPage
          applicationData={applicationData}
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
