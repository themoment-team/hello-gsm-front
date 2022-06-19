export interface ProfileType {
  data: {
    userIdx: number;
    userImg: string;
    name: string;
    birth: Date;
    cellphoneNumber: string;
    gender: string;
    application?: ApplicantType;
  };
}

interface ApplicantType {
  applicationIdx: number;
  registrationNumber: null | boolean;
  isFinalSubmission: null | boolean;
  isDocumentReception: null | boolean;
  firstResultScreening: null | boolean;
  finalResultScreening: null | boolean;
  guardianCellphoneNumber: string;
  teacherCellphoneNumber: string;
  schoolName: string;
  screening: '일반전형' | '사회통합전형' | '특별전형';
  userIdx: number;
  applicationScore: ApplicantScoreType;
  applicationDetails: ApplicantDetailsType;
}

interface ApplicantDetailsType {
  applicantionIdx: number;
  idPhotoUrl: string;
  address: string;
  addressDetails: string;
  telephoneNumber?: string;
  guardianName: string;
  guardianRelation: string;
  guardianCellphoneNumber: string;
  teacherName: string;
  schoolLocation: string;
  educationStatus: '졸업예정' | '졸업' | '검정고시';
  graduationYear: string;
  graduationMonth: string;
  schoolTelephoneNumber: string;
  firstWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
  secondWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
  thirdWantedMajor: '소프트웨어개발과' | '스마트IOT과' | '인공지능과';
  majorResult?: string;
}

interface ApplicantScoreType {
  score2_1: number;
  score2_2: number;
  score3_1: number;
  generalCurriculumScoreSubtotal: number;
  artSportsScore: number;
  curriculumScoreSubtotal: number;
  attendanceScore: number;
  volunteerScore: number;
  nonCurriculumScoreSubtotal: number;
  scoreTotal: number;
}
