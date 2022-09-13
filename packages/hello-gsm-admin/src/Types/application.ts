export interface DocumentType {
  registrationNumber: number;
}

export interface ScoreType {
  registrationNumber: number;
  personalityEvaluationScore: number;
}

export interface ApplicantType {
  cellphoneNumber: string;
  application: {
    applicationIdx: number;
    name: string;
    finalResultScreening: null | string;
    firstResultScreening: null | string;
    guardianCellphoneNumber: string;
    isDocumentReception: boolean;
    schoolName: string | null;
    screening: '일반전형' | '사회통합전형' | '특별전형';
    teacherCellphoneNumber: string;
  };
}

export interface ApplicantsType {
  data: ApplicantType[];
}
