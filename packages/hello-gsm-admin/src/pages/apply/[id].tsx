import type { NextPage } from 'next';

import { css, Global } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import application from 'Api/application';
import { ApplyPage, CalculatorPage, GEDCalculatorPage } from 'PageContainer';
import useApplyStore from 'Stores/ApplyStoreContainer';
import { ApplicationResponseType } from 'type/application';

import { SEOHelmet, SideBar } from 'components';

const Apply: NextPage = () => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  const { applyData } = useApplyStore();

  const { query } = useRouter();

  const [applicationData, setApplicationData] =
    useState<ApplicationResponseType>();

  const userId = query.id as string;

  const getApplication = async () => {
    try {
      const { data }: { data: ApplicationResponseType } =
        await application.getUserApplication(userId);

      setApplicationData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getApplication();
  }, [userId]);

  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #0f0921;
          }
        `}
      />
      <SideBar />
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {step === '원서' && (
        <ApplyPage
          applicationData={applicationData}
          onNext={() => setStep('성적')}
        />
      )}
      {step === '성적' &&
        (applyData?.graduation === 'GED' ? (
          <GEDCalculatorPage
            score={applicationData?.middleSchoolGrade}
            userId={userId}
          />
        ) : (
          <CalculatorPage
            score={applicationData?.middleSchoolGrade}
            userId={userId}
          />
        ))}
    </>
  );
};

export default Apply;
