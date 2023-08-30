export interface DocumentType {
  registrationNumber: number;
}

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

export interface ApplicantsType {
  list: ApplicantType[];
  count: number;
}

export type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';
