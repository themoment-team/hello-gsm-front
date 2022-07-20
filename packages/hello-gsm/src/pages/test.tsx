import type { GetServerSideProps, NextPage } from 'next';
import application from 'Api/application';
import { StatusType } from 'type/user';
import user from 'Api/user';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { SEOHelmet } from 'components';
import { TestApplicationPage } from 'PageContainer';
import { GetApplicationType, TestType } from 'type/application';

const Application: NextPage<GetApplicationType> = ({ data }) => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(true);
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TestApplicationPage data={expected.data} />
      <TestApplicationPage data={graduated.data} />
      <TestApplicationPage data={ged.data} />
    </>
  );
};

const expected: TestType = {
  data: {
    user_idx: 1,
    userImg: 'asdas',
    name: '유시온',
    birth: '2005-11-09',
    gender: '여자',
    cellphoneNumber: '01092015487',
    application_image: {
      idPhotoUrl: 'ㅁㄴㅇㅁㄴ',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 21,
      isFinalSubmission: false,
      isDocumentReception: false,
      firstResultScreening: 'ㅁㄴ',
      finalResultScreening: 'ㅁㄴㅇ',
      guardianCellphoneNumber: '01023235487',
      teacherCellphoneNumber: '01092937463',
      schoolName: '풍암중학교',
      screening: '일반전형',
      user_idx: 1,
      application_score: {
        applicationIdx: 1,
        score2_1: 54,
        score2_2: 54,
        score3_1: 72,
        generalCurriculumScoreSubtotal: 180,
        artSportsScore: 60,
        curriculumScoreSubtotal: 240,
        attendanceScore: 30,
        volunteerScore: 30,
        nonCurriculumScoreSubtotal: 60,
        personalityEvaluationScore: 100,
        scoreTotal: 300,
        rankPercentage: 3.4,
      },
      application_details: {
        applicationIdx: 1,
        address: '풍암동',
        addressDetails: '102동304호',
        telephoneNumber: '01092389483',
        guardianName: '엄마',
        guardianRelation: '모',
        teacherName: '쌤',
        schoolLocation: '풍암동',
        educationStatus: '졸업예정',
        graduationYear: '2022',
        graduationMonth: '02',
        firstWantedMajor: '소프트웨어개발과',
        secondWantedMajor: '스마트IoT과',
        thirdWantedMajor: '인공지능과',
        majorResult: 'ㅁㄴㅇㅁ',
      },
    },
  },
};

const graduated: TestType = {
  data: {
    user_idx: 1,
    userImg: 'asdas',
    name: '유시온',
    birth: '2005-11-09',
    gender: '여자',
    cellphoneNumber: '01092015487',
    application_image: {
      idPhotoUrl: 'ㅁㄴㅇㅁㄴ',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 21,
      isFinalSubmission: false,
      isDocumentReception: false,
      firstResultScreening: 'ㅁㄴ',
      finalResultScreening: 'ㅁㄴㅇ',
      guardianCellphoneNumber: '01023235487',
      teacherCellphoneNumber: '01092937463',
      schoolName: '풍암중학교',
      screening: '일반전형',
      user_idx: 1,
      application_score: {
        applicationIdx: 1,
        score1_1: 18,
        score1_2: 18,
        score2_1: 54,
        score2_2: 54,
        score3_1: 72,
        generalCurriculumScoreSubtotal: 180,
        artSportsScore: 60,
        curriculumScoreSubtotal: 240,
        attendanceScore: 30,
        volunteerScore: 30,
        nonCurriculumScoreSubtotal: 60,
        personalityEvaluationScore: 30,
        scoreTotal: 300,
      },
      application_details: {
        applicationIdx: 1,
        address: '풍암동',
        addressDetails: '102동304호',
        telephoneNumber: '01092389483',
        guardianName: '엄마',
        guardianRelation: '모',
        teacherName: '쌤',
        schoolLocation: '풍암동',
        educationStatus: '졸업',
        graduationYear: '2022',
        graduationMonth: '02',
        firstWantedMajor: '소프트웨어개발과',
        secondWantedMajor: '스마트IoT과',
        thirdWantedMajor: '인공지능과',
        majorResult: 'ㅁㄴㅇㅁ',
      },
    },
  },
};

const ged: TestType = {
  data: {
    user_idx: 1,
    userImg: 'asdas',
    name: '유시온',
    birth: '2005-11-09',
    gender: '여자',
    cellphoneNumber: '01092015487',
    application_image: {
      idPhotoUrl: 'ㅁㄴㅇㅁㄴ',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 21,
      isFinalSubmission: false,
      isDocumentReception: false,
      firstResultScreening: 'ㅁㄴ',
      finalResultScreening: 'ㅁㄴㅇ',
      guardianCellphoneNumber: '01023235487',
      teacherCellphoneNumber: '01092937463',
      screening: '일반전형',
      user_idx: 1,
      application_score: {
        applicationIdx: 1,
        curriculumScoreSubtotal: 240,
        nonCurriculumScoreSubtotal: 60,
        personalityEvaluationScore: 30,
        rankPercentage: 3.4,
      },
      application_details: {
        applicationIdx: 1,
        address: '풍암동',
        addressDetails: '102동304호',
        telephoneNumber: '01092389483',
        guardianName: '엄마',
        guardianRelation: '모',
        teacherName: '쌤',
        educationStatus: '검정고시',
        graduationYear: '2022',
        graduationMonth: '02',
        firstWantedMajor: '소프트웨어개발과',
        secondWantedMajor: '스마트IoT과',
        thirdWantedMajor: '인공지능과',
        majorResult: 'ㅁㄴㅇㅁ',
      },
    },
  },
};

const getInfo = async (accessToken: string) => {
  // 최종제출을 하였는지 요청
  const { data }: StatusType = await user.status(accessToken);

  if (data.application?.isFinalSubmission) {
    try {
      // 최종제출이 완료 되었으면 원서 정보를 props로 보냄
      const { data }: GetApplicationType = await application.getInformation(
        accessToken,
      );
      return {
        props: {
          data,
        },
      };
    } catch (err: any) {
      return {
        props: {},
      };
    }
  } else {
    // 최종제출이 안되어 있으면 mypage로 이동
    return {
      props: {},
    };
  }
};

/**
 *
 * @returns 유저 상태 요청 후 최종제출 완료 시 유저 정보 요청
 * 비완료 시 마이페이지로 이동
 */
export const getServerSideProps: GetServerSideProps = async ctx => {
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;

  if (ctx.req.cookies.refreshToken) {
    try {
      // 로그인 O
      await auth.check(accessToken);
      return getInfo(accessToken);
    } catch (err) {
      try {
        // 요청 헤더를 가저온다
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
        const accessToken = headers['set-cookie'][0].split(';')[0];
        // 브라우저에 쿠키들을 저장한다
        ctx.res.setHeader('set-cookie', headers['set-cookie']);
        // headers에서 가져온 accessToken을 담아 요청을 보낸다
        return getInfo(accessToken);
      } catch (err) {
        // 로그인 실패
        return {
          props: {},
        };
      }
    }
  } else {
    // 로그인 X
    return {
      props: {},
    };
  }
};

export default Application;
