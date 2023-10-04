export interface DocumentType {
  registrationNumber: number;
}

export type EvaluationStatusType = 'NOT_YET' | 'PASS' | 'FALL';

export type GenderType = 'MALE' | 'FEMALE';

export type MajorType = 'SW' | 'IOT' | 'AI' | '';

export interface ScoreType {
  registrationNumber: number;
  personalityEvaluationScore: number;
}

export interface ApplicantType {
  cellphoneNumber: string;
  name: string;
  application: {
    applicationIdx: number;
    finalResultScreening: null | string;
    firstResultScreening: null | string;
    guardianCellphoneNumber: string;
    isDocumentReception: boolean;
    registrationNumber: number;
    schoolName: string | null;
    screening: '일반전형' | '사회통합전형' | '특별전형';
    teacherCellphoneNumber: string;
    application_score: null | {
      personalityEvaluationScore: string;
    };
  };
}
export interface GetListType {
  data: ApplicantType[];
}

export interface SearchApplicationInfoType {
  info: {
    totalPages: number;
    totalElements: number;
  };
  applications: {
    applicationId: number;
    isFinalSubmitted: boolean;
    isPrintsArrived: boolean;
    applicantName: string;
    screening: ScreeningType;
    schoolName: string;
    applicantPhoneNumber: string;
    guardianPhoneNumber: string;
    teacherPhoneNumber: string;
    firstEvaluation: EvaluationStatusType;
    secondEvaluation: EvaluationStatusType;
    screeningFirstEvaluationAt: ScreeningType;
    screeningSecondEvaluationAt: ScreeningType;
    secondScore: number;
    finalMajor: MajorType;
  }[];
}

export interface ApplicationListType {
  applicationId: number;
  isFinalSubmitted: boolean;
  isPrintsArrived: boolean;
  applicantName: string;
  screening: ScreeningType;
  schoolName: string;
  applicantPhoneNumber: string;
  guardianPhoneNumber: string;
  teacherPhoneNumber: string;
  firstEvaluation: EvaluationStatusType;
  secondEvaluation: EvaluationStatusType;
  secondScore: number;
  finalMajor: MajorType;
  screeningFirstEvaluationAt: ScreeningType;
  screeningSecondEvaluationAt: ScreeningType;
}

export interface CommonApplicationResponseType {
  isFinalSubmitted: boolean | undefined;
  isPrintsArrived: boolean | undefined;
  firstEvaluation: EvaluationStatusType;
  secondEvaluation: EvaluationStatusType;
  screeningFirstEvaluationAt: ScreeningType | null;
  screeningSecondEvaluationAt: ScreeningType | null;
  registrationNumber: number | null;
  secondScore: number | null;
  finalMajor: MajorType | null;
}

export interface ApplicationDataType {
  data: CommonApplicationResponseType;
}

export interface SearchApplicationType {
  data: SearchApplicationInfoType;
}

export interface ApplicantsType {
  list: ApplicantType[];
  count: number;
}

export type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';

export type ApplyFormType = Omit<ApplicationFormType, 'middleSchoolGrade'>;

export type GraduationStatusType = 'CANDIDATE' | 'GRADUATE' | 'GED';

export interface ApplicationFormType {
  applicantImageUri: string;
  address: string;
  detailAddress: string;
  graduation: GraduationStatusType;
  telephone: string | null;
  guardianName: string;
  relationWithApplicant: string;
  guardianPhoneNumber: string;
  teacherName: string | null;
  teacherPhoneNumber: string | null;
  firstDesiredMajor: MajorType | null;
  secondDesiredMajor: MajorType;
  thirdDesiredMajor: MajorType;
  schoolName: string | null;
  schoolLocation: string | null;
  screening: ScreeningType | 'SPECIAL' | '';
  middleSchoolGrade: string;
}

export interface GEDScore {
  totalScore: number;
  percentileRank: number;
  gedTotalScore: number;
  gedMaxScore: number;
}

export interface CommonScore {
  totalScore: number;
  percentileRank: number;
  grade1Semester1Score: number;
  grade1Semester2Score: number;
  grade2Semester1Score: number;
  grade2Semester2Score: number;
  grade3Semester1Score: number;
  artisticScore: number;
  curricularSubtotalScore: number;
  attendanceScore: number;
  volunteerScore: number;
  extracurricularSubtotalScore: number;
}

export interface ApplicationResponseType {
  id: number;
  admissionInfo: {
    applicantName: string;
    applicantGender: GenderType;
    applicantBirth: Date;
    address: string;
    detailAddress: string;
    graduation: GraduationStatusType;
    telephone: string | null;
    applicantPhoneNumber: string;
    guardianName: string;
    relationWithApplicant: string;
    guardianPhoneNumber: string;
    teacherName: string | null;
    teacherPhoneNumber: string | null;
    schoolName: string | null;
    schoolLocation: string | null;
    applicantImageUri: string;
    desiredMajor: {
      firstDesiredMajor: MajorType;
      secondDesiredMajor: MajorType;
      thirdDesiredMajor: MajorType;
    };
    screening: ScreeningType;
  };
  middleSchoolGrade: string;
  admissionGrade: GEDScore | CommonScore;
  admissionStatus: {
    isFinalSubmitted: boolean;
    isPrintsArrived: boolean;
    firstEvaluation: EvaluationStatusType;
    secondEvaluation: EvaluationStatusType;
    screeningSubmittedAt: ScreeningType | null;
    screeningFirstEvaluationAt: ScreeningType | null;
    screeningSecondEvaluationAt: ScreeningType | null;
    registrationNumber: number | null;
    secondScore: number | null;
    finalMajor: MajorType | null;
  };
}
