export interface DocumentType {
  registrationNumber: number;
}

export type EvaluationStatusType = 'NOT_YET' | 'PASS' | 'FALL';

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

export type MajorType = 'SW' | 'IOT' | 'AI' | null;

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
