export interface ApplicationType {
  application: {
    teacherCellphoneNumber?: string;
    schoolName?: string;
    guardianCellphoneNumber: string;
    screening: '일반전형' | '사회통합전형' | '특별전형';
  };
  applicationDetail: {
    telephoneNumber?: string;
    address: string;
    addressDetails?: string;
    guardianName: string;
    guardianRelation: string;
    educationStatus: '졸업예정' | '졸업' | '검정고시';
    graduationYear: string;
    graduationMonth: string;
    firstWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과' | '';
    secondWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과' | '';
    thirdWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과' | '';
    teacherName?: string;
    schoolLocation?: string;
  };
}

export interface ScoreType {
  score2_1: number;
  score2_2: number;
  score3_1: number;
  generalCurriculumScoreSubtotal: number;
  artSportsScore: number;
  attendanceScore: number;
  curriculumScoreSubtotal: number;
  volunteerScore: number;
  nonCurriculumScoreSubtotal: number;
  scoreTotal: number;
}

export interface GetApplicationType {
  data: {
    userIdx: number;
    userImg: string;
    name: string;
    birth: Date;
    gender: '남자' | '여자';
    cellphoneNumber: string;
    application_image: {
      idPhotoUrl: string;
    };
    application: null | {
      applicationIdx: number;
      registrationNumber: null | number;
      isFinalSubmission: null | boolean;
      isDocumentReception: null | boolean;
      firstResultScreening: null | string;
      finalResultScreening: null | string;
      guardianCellphoneNumber: string;
      teacherCellphoneNumber: null | string;
      schoolName: null | string;
      screening: '일반전형' | '사회통합전형' | '특별전형';
      user_idx: number;
      application_score: null | number;
      application_details: {
        applicationIdx: number;
        address: string;
        addressDetails: string;
        telephoneNumber: string;
        guardianName: string;
        guardianRelation: string;
        teacherName: null | string;
        schoolLocation: null | string;
        educationStatus: '졸업예정' | '졸업' | '검정고시';
        graduationYear: string;
        graduationMonth: string;
        firstWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
        secondWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
        thirdWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
        majorResult: null | string;
      };
    };
  };
}

export interface ApplyFormType {
  addressDetails: string;
  telephoneNumber: string;
  screening: '일반전형' | '사회통합전형' | '특별전형';
  graduationYear: string;
  graduationMonth: string;
  educationStatus: '졸업예정' | '졸업' | '검정고시';
  guardianName: string;
  guardianRelation: string;
  guardianCellphoneNumber: string;
  teacherName: string | null;
  teacherCellphoneNumber: string | null;
}
