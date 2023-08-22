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
          isSubmissionProp={applicationData.middleSchoolGrade ? true : false}
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
      props: {
        applicationData: {
          id: 1,
          admissionInfo: {
            applicantName: 'human',
            applicantGender: 'MALE',
            applicantBirth: '2023-06-30',
            address: '광주광역시 광산구 송정동 상무대로 312',
            detailAddress: '이세상 어딘가',
            graduation: 'GED',
            telephone: '01012341234',
            applicantPhoneNumber: '01012341234',
            guardianName: '홍길동',
            relationWithApplicant: '모',
            guardianPhoneNumber: '01012341234',
            teacherName: '홍길동',
            teacherPhoneNumber: '01012341234',
            schoolName: '광소마중',
            schoolLocation: '광주 송정동 광소마중',
            applicantImageUri: null,
            desiredMajor: {
              firstDesiredMajor: 'SW',
              secondDesiredMajor: 'AI',
              thirdDesiredMajor: 'IOT',
            },
            screening: 'SPECIAL_ADMISSION',
          },
          middleSchoolGrade:
            '{"curriculumScoreSubtotal":100,"nonCurriculumScoreSubtotal":100,"rankPercentage":0,"scoreTotal":261}',
          admissionGrade: {
            totalScore: 261,
            percentileRank: 0,
            gedTotalScore: 100,
            gedMaxScore: 100,
          },
          admissionStatus: {
            isFinalSubmitted: false,
            isPrintsArrived: false,
            firstEvaluation: 'NOT_YET',
            secondEvaluation: 'NOT_YET',
            screeningSubmittedAt: null,
            screeningFirstEvaluationAt: null,
            screeningSecondEvaluationAt: null,
            registrationNumber: null,
            secondScore: null,
            finalMajor: null,
          },
        },
      },
    };
  }
};

export default Apply;
