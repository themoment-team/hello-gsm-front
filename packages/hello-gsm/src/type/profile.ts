export interface ProfileType {
  data: {
    name: string;
    birth: Date;
    cellphoneNumber: string;
    gender: string;
    application: ApplicantType;
    applicationScore: ApplicantScoreType;
  };
}

interface ApplicantType {
  schoolName: string;
  screening: '일반전형' | '사회통합전형' | '특별전형';
  teacherCellphoneNumber: string;
  guardianCellphoneNumber: string;
  applicationDetails: ApplicantDetailsType;
}

interface ApplicantDetailsType {
  applicantIdx: number;
  idPhotoUrl: string;
  address: string;
  addressDetails: string;
  telephoneNumber?: string;
  gurardinanName: string;
  guardianRelation: string;
  teacherName: string;
  schoolLocation: string;
  educationStatus: '졸업예정' | '졸업' | '검정고시';
  graduationYear: string;
  graduationMonth: string;
  schoolTelephoneNumber: string;
  firstWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  secondWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  thirdWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  majorResult?: string;
}

interface ApplicantScoreType {
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
  scoreTotal: number;
}
