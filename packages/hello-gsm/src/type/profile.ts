export interface ProfileType {
  data: {
    userIdx: number;
    userImg: string;
    name: string;
    birth: Date;
    gender: string;
    cellphoneNumber: string;
    application?: ApplicantType;
  };
}

interface ApplicantType {
  applicationIdx: number;
  registrationNumber?: number;
  isFinalSubmission?: boolean;
  isDocumentReception?: boolean;
  firstResultScreening?: boolean;
  finalResultScreening?: boolean;
  guardianCellphoneNumber: string;
  teacherCellphoneNumber: string;
  schoolName?: string;
  screening: '일반전형' | '사회통합전형' | '특별전형';
  userIdx: number;
  applicationScore?: ApplicantScoreType;
  applicationDetails?: ApplicantDetailsType;
}

interface ApplicantDetailsType {
  applicantionIdx: number;
  idPhotoUrl: string;
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
  schoolTelephoneNumber: string;
  firstWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
  secondWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
  thirdWantedMajor: '소프트웨어개발과' | '스마트IoT과' | '인공지능과';
  majorResult?: string;
}

interface ApplicantScoreType {
  score2_1: number; // 2학년 1학기
  score2_2: number; // 2학년 2학기
  score3_1: number; // 3학년 1학기
  generalCurriculumScoreSubtotal: number; // 일반교과 소계
  artSportsScore: number; // 예체능
  curriculumScoreSubtotal: number; // 알반교과 + 예체능 소계
  attendanceScore: number; // 출석 점수
  volunteerScore: number; // 봉사 점수
  nonCurriculumScoreSubtotal: number; // 비교과 소계
  scoreTotal: number; // 총합
}
