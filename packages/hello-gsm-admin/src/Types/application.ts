export interface DocumentType {
  registrationNumber: number;
}

export interface ScoreType {
  registrationNumber: number;
  personalityEvaluationScore: number;
}

export interface ApplicantType {
  registrationNumber: number;
  name: string;
  screening: string;
  schoolName: string;
  isDocumentReception: boolean;
  phoneNumber: string;
  guardianNumber: string;
  teacherNumber: string;
}

export interface ApplicantsType {
  data: ApplicantType[];
}
