import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import application from 'Api/application';
import { ApplicationDataType } from 'type/application';

const Home: NextPage<ApplicationDataType> = ({ data }) => {
  const seoTitle = '홈';
  const desc = '광주소프트웨어마이스터고등학교 입학 지원 서비스입니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: ApplicationDataType = await application.getMyApplication();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {
          id: 1,
          admissionInfo: {
            applicantName: 'human',
            applicantGender: 'MALE',
            applicantBirth: '2023-06-30',
            address: '광주광역시 광산구 송정동 상무대로 312',
            detailAddress: '이세상 어딘가',
            graduation: 'CANDIDATE',
            telephone: '01012341234',
            applicantPhoneNumber: '01012341234',
            guardianName: '홍길동',
            relationWithApplicant: '모',
            guardianPhoneNumber: '01012341234',
            teacherName: '홍길동',
            teacherPhoneNumber: '01012341234',
            schoolName: '광소마중',
            schoolLocation: '광주 송정동 광소마중',
            applicantImageUri: 'https://hellogsm.com',
            desiredMajor: {
              firstDesiredMajor: 'SW',
              secondDesiredMajor: 'AI',
              thirdDesiredMajor: 'IOT',
            },
            screening: 'GENERAL',
          },
          middleSchoolGrade:
            '{"curriculumScoreSubtotal":100,"nonCurriculumScoreSubtotal":100,"rankPercentage":0,"scoreTotal":261}',
          admissionGrade: {
            totalScore: 298,
            percentileRank: 0.7,
            grade1Semester1Score: 18,
            grade1Semester2Score: 36,
            grade2Semester1Score: 36,
            grade2Semester2Score: 48,
            grade3Semester1Score: 64,
            artisticScore: 60,
            curricularSubtotalScore: 262,
            attendanceScore: 30,
            volunteerScore: 6,
            extracurricularSubtotalScore: 36,
          },
          admissionStatus: {
            isFinalSubmitted: true,
            isPrintsArrived: false,
            firstEvaluation: 'PASS',
            secondEvaluation: 'FALL',
            screeningSubmittedAt: null,
            screeningFirstEvaluationAt: null,
            screeningSecondEvaluationAt: null,
            registrationNumber: null,
            secondScore: null,
            finalMajor: 'SW',
          },
        },
      },
    };
  }
};

export default Home;
