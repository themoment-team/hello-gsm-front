import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MypagePage } from 'PageContainer';
import application from 'Api/application';
import { ApplicationResponseType } from 'type/application';

const MyPage: NextPage<{ data: ApplicationResponseType }> = ({ data }) => {
  const seoTitle = '내 정보';
  const desc = '내 정보를 확인하고 원서 관리 및 원서 출력 등을 할 수 있습니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage data={data} />
    </>
  );
};

/**
 *
 * @returns - refreshToken 비존재 시 signin redirection,
 * refreshToken 존재 시, accessToken 존재 시 요청, 비존재 시 accessToken 요청 후 status 요청
 */
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: { data: ApplicationResponseType } =
      await application.getMyApplication();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {
          // id: 1,
          // admissionInfo: {
          //   applicantName: 'human',
          //   applicantGender: 'MALE',
          //   applicantBirth: '2023-06-30',
          //   address: '광주광역시 광산구 송정동 상무대로 312',
          //   detailAddress: '이세상 어딘가',
          //   graduation: 'GED',
          //   telephone: '01012341234',
          //   applicantPhoneNumber: '01012341234',
          //   guardianName: '홍길동',
          //   relationWithApplicant: '모',
          //   guardianPhoneNumber: '01012341234',
          //   teacherName: '홍길동',
          //   teacherPhoneNumber: '01012341234',
          //   schoolName: '광소마중',
          //   schoolLocation: '광주 송정동 광소마중',
          //   applicantImageUri: 'https://hellogsm.com',
          //   desiredMajor: {
          //     firstDesiredMajor: 'SW',
          //     secondDesiredMajor: 'AI',
          //     thirdDesiredMajor: 'IOT',
          //   },
          //   screening: 'GENERAL',
          // },
          // middleSchoolGrade:
          //   '{"curriculumScoreSubtotal":100,"nonCurriculumScoreSubtotal":100,"rankPercentage":0,"scoreTotal":261}',
          // admissionGrade: {
          //   totalScore: 261,
          //   percentileRank: 0,
          //   gedTotalScore: 100,
          //   gedMaxScore: 100,
          // },
          // admissionStatus: {
          //   isFinalSubmitted: false,
          //   isPrintsArrived: false,
          //   firstEvaluation: 'NOT_YET',
          //   secondEvaluation: 'NOT_YET',
          //   screeningSubmittedAt: null,
          //   screeningFirstEvaluationAt: null,
          //   screeningSecondEvaluationAt: null,
          //   registrationNumber: null,
          //   secondScore: null,
          //   finalMajor: null,
          // },
        },
      },
      // redirect: {
      //   destination: '/auth/signin',
      // },
    };
  }
};

export default MyPage;
