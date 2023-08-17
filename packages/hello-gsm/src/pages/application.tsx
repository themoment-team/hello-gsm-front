import type { GetServerSideProps, NextPage } from 'next';
import application from 'Api/application';
import { SEOHelmet } from 'components';
import { ApplicationPage } from 'PageContainer';
import { ApplicationResponseType } from 'type/application';

const Application: NextPage<{ data: ApplicationResponseType }> = ({ data }) => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage data={data} />
    </>
  );
};

/**
 *
 * @returns 유저 상태 요청 후 최종제출 완료 시 유저 정보 요청
 * 비완료 시 마이페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // 최종제출이 완료 되었으면 원서 정보를 props로 보냄
    const { data }: { data: ApplicationResponseType } =
      await application.getMyApplication();

    if (data.admissionStatus.isFinalSubmitted) {
      return {
        props: { data },
      };
    } else
      return {
        props: {},
        redirect: {
          destination: '/mypage',
        },
      };
  } catch (err: any) {
    const gedDummy = {
      id: 1,
      admissionInfo: {
        applicantName: 'human',
        applicantGender: 'MALE',
        applicantBirth: '2023-06-30',
        address: '광주광역시 광산구 송정동 상무대로 312',
        detailAddress: '이세상 어딘가',
        graduation: 'GED',
        telephone: null,
        applicantPhoneNumber: '01012341234',
        guardianName: '홍길동',
        relationWithApplicant: '모',
        guardianPhoneNumber: '01012341234',
        teacherName: null,
        teacherPhoneNumber: null,
        schoolName: null,
        schoolLocation: null,
        applicantImageUri: 'https://github.com/yoosion030.png',
        desiredMajor: {
          firstDesiredMajor: 'SW',
          secondDesiredMajor: 'AI',
          thirdDesiredMajor: 'IOT',
        },
        screening: 'GENERAL',
      },
      middleSchoolGrade: '',
      admissionGrade: {
        totalScore: 298,
        percentileRank: 0.7,
        grade1Semester1Score: 0,
        grade1Semester2Score: 0,
        grade2Semester1Score: 0,
        grade2Semester2Score: 0,
        grade3Semester1Score: 0,
        artisticScore: 0,
        curricularSubtotalScore: 0,
        attendanceScore: 0,
        volunteerScore: 0,
        extracurricularSubtotalScore: 36,
        gedTotalScore: 10,
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
        registrationNumber: 1,
        secondScore: null,
        finalMajor: null,
      },
    };
    const commonDummy = {
      id: 1,
      admissionInfo: {
        applicantName: 'human',
        applicantGender: 'MALE',
        applicantBirth: '2023-06-30',
        address: '광주광역시 광산구 송정동 상무대로 312',
        detailAddress: '이세상 어딘가',
        graduation: 'CANDIDATE',
        telephone: null,
        applicantPhoneNumber: '01012341234',
        guardianName: '홍길동',
        relationWithApplicant: '모',
        guardianPhoneNumber: '01012341234',
        teacherName: '홍길동',
        teacherPhoneNumber: '01012341234',
        schoolName: '풍암중학교',
        schoolLocation: '광주 송정동 광소마중',
        applicantImageUri: 'https://github.com/yoosion030.png',
        desiredMajor: {
          firstDesiredMajor: 'SW',
          secondDesiredMajor: 'AI',
          thirdDesiredMajor: 'IOT',
        },
        screening: 'SOCIAL',
      },
      middleSchoolGrade:
        '{"curriculumScoreSubtotal":100,"nonCurriculumScoreSubtotal":100,"rankPercentage":0,"scoreTotal":261, "score2_1":[4,4,5,5,4,4,3,2], "score2_2":[4,4,5,5,4,4,3,2], "score3_1":[4,4,5,5,4,4,3,2], "artSportsScore":[4,4,4,4,4,5,5,5,4], "attendanceScore":[0,0,0,0,0,0,0,0,0], "absentScore":[0, 0, 0],  "volunteerScore":[0,0,0], "subjects": ["국어", "도덕", "사회", "역사", "수학", "과학", "기술가정", "영어"]}',
      admissionGrade: {
        totalScore: 298,
        percentileRank: 0.7,
        grade1Semester1Score: 0,
        grade1Semester2Score: 0,
        grade2Semester1Score: 0,
        grade2Semester2Score: 0,
        grade3Semester1Score: 0,
        artisticScore: 0,
        curricularSubtotalScore: 0,
        attendanceScore: 0,
        volunteerScore: 0,
        extracurricularSubtotalScore: 36,
      },
      admissionStatus: {
        isFinalSubmitted: false,
        isPrintsArrived: false,
        firstEvaluation: 'NOT_YET',
        secondEvaluation: 'NOT_YET',
        screeningSubmittedAt: null,
        screeningFirstEvaluationAt: null,
        screeningSecondEvaluationAt: null,
        registrationNumber: 1,
        secondScore: null,
        finalMajor: null,
      },
    };
    return {
      props: { data: commonDummy },
      // redirect: {
      //   destination: '/mypage',
      // },
    };
  }
};

export default Application;
