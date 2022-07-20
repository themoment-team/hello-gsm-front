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
    firstWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과' | '';
    secondWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과' | '';
    thirdWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과' | '';
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
    user_idx: number;
    userImg: string;
    name: string;
    birth: Date;
    gender: '남자' | '여자';
    cellphoneNumber: string;
    application_image?: {
      idPhotoUrl: string;
    };
    application?: {
      applicationIdx: number;
      registrationNumber?: number;
      isFinalSubmission?: boolean;
      isDocumentReception?: boolean;
      firstResultScreening?: string;
      finalResultScreening?: string;
      guardianCellphoneNumber: string;
      teacherCellphoneNumber?: string;
      schoolName?: string;
      screening: '일반전형' | '사회통합전형' | '특별전형';
      user_idx: number;
      application_score?: {
        applicationIdx: number;
        score2_1: number;
        score2_2: number;
        score3_1: number;
        generalCurriculumScoreSubtotal: number;
        artSportsScore: number;
        curriculumScoreSubtotal: number;
        attendanceScore: number;
        volunteerScore: number;
        nonCurriculumScoreSubtotal: number;
        personalityEvaluationScore: number;
        scoreTotal: number;
      };
      application_details?: {
        applicationIdx: number;
        address: string;
        addressDetails?: string;
        telephoneNumber?: string;
        guardianName: string;
        guardianRelation: string;
        teacherName?: string;
        schoolLocation?: string;
        educationStatus: '졸업예정' | '졸업' | '검정고시';
        graduationYear: string;
        graduationMonth: string;
        firstWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        secondWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        thirdWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        majorResult?: string;
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

export interface TestType {
  data: {
    user_idx: number;
    userImg: string;
    name: string;
    birth: string;
    gender: '남자' | '여자';
    cellphoneNumber: string;
    application_image?: {
      idPhotoUrl: string;
    };
    application?: {
      applicationIdx: number;
      registrationNumber?: number;
      isFinalSubmission?: boolean;
      isDocumentReception?: boolean;
      firstResultScreening?: string;
      finalResultScreening?: string;
      guardianCellphoneNumber: string;
      teacherCellphoneNumber?: string;
      schoolName?: string;
      screening: '일반전형' | '사회통합전형' | '특별전형';
      user_idx: number;
      application_score?: {
        applicationIdx: number;
        score1_1?: number;
        score1_2?: number;
        score2_1?: number;
        score2_2?: number;
        score3_1?: number;
        score3_2?: number;
        generalCurriculumScoreSubtotal?: number;
        artSportsScore?: number;
        curriculumScoreSubtotal: number;
        attendanceScore?: number;
        volunteerScore?: number;
        nonCurriculumScoreSubtotal: number;
        personalityEvaluationScore: number;
        scoreTotal?: number;
        rankPercentage?: number;
      };
      application_details?: {
        applicationIdx: number;
        address: string;
        addressDetails?: string;
        telephoneNumber?: string;
        guardianName: string;
        guardianRelation: string;
        teacherName?: string;
        schoolLocation?: string;
        educationStatus: '졸업예정' | '졸업' | '검정고시';
        graduationYear: string;
        graduationMonth: string;
        firstWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        secondWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        thirdWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
        majorResult?: string;
      };
    };
  };
}
