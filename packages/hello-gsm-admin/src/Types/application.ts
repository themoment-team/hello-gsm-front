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

export interface SearchApplicationInfoType {
  info: {
    count: number;
  };
  applications: {
    applicationId: number;
    isFinalSubmitted: boolean;
    isPrintsArrived: boolean;
    applicantName: string;
    screening: string;
    schoolName: ScreeningType;
    applicantPhoneNumber: string;
    guardianPhoneNumber: string;
    teacherPhoneNumber: string;
    firstEvaluation: EvaluationStatusType;
    secondEvaluation: EvaluationStatusType;
    secondScore: number;
  }[];
}

export interface SearchApplicationType {
  data: SearchApplicationInfoType;
}

export interface GetListType {
  data: ApplicantType[];
}

export interface ApplicantsType {
  list: ApplicantType[];
  count: number;
  searchParams: {
    pageNumber: string;
  };
}

export type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';
