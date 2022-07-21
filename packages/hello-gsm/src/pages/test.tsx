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
      idPhotoUrl:
        'data:image/png;base64,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',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 2,
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
      idPhotoUrl:
        'data:image/jpeg;base64,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',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 3,
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
      idPhotoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgw5Uo6l7fTgYntEbcLSAvKPW0kDXfMTBgzQ&usqp=CAU',
    },
    application: {
      applicationIdx: 1,
      registrationNumber: 1,
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
