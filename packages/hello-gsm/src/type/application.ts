type MajorType = 'SW' | 'IOT' | 'AI' | '';

export type GraduationStatusType = 'CANDIDATE' | 'GRADUATE' | 'GED';

export type GenderType = 'MALE' | 'FEMALE';

export type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';

export type EvaluationStatusType = 'NOT_YET' | 'PASS' | 'FALL';

export interface CommonApplicationResponseType {
  id: number;
  admissionInfo: {
    applicantName: string;
    applicantGender: GenderType;
    applicantBirth: Date;
    address: string;
    detailAddress: string;
    graduation: GraduationStatusType;
    telephone?: string;
    applicantPhoneNumber: string;
    guardianName: string;
    relationWithApplicant: string;
    guardianPhoneNumber: string;
    teacherName?: string;
    teacherPhoneNumber?: string;
    schoolName?: string;
    schoolLocation?: string;
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

export interface ApplyFormType {
  applicantImageUri: string;
  address: string;
  detailAddress: string;
  graduation: GraduationStatusType;
  telephone: string;
  guardianName: string;
  relationWithApplicant: string;
  guardianPhoneNumber: string;
  teacherName: string;
  teacherPhoneNumber: string;
  firstDesiredMajor: MajorType;
  secondDesiredMajor: MajorType;
  thirdDesiredMajor: MajorType;
  schoolName: string;
  schoolLocation: string;
  screening: ScreeningType | '';
}

export interface AdmissionInfoType {
  admissionInfo: {
    applicantName: string;
    applicantGender: 'MALE' | 'FEMALE';
    applicantBirth: Date;
    address: string;
    detailAddress: string;
    graduation: GraduationStatusType;
    telephone: string;
    applicantPhoneNumber: string;
    guardianName: string;
    relationWithApplicant: string;
    guardianPhoneNumber: string;
    teacherName: string;
    teacherPhoneNumber: string;
    schoolName: string;
    schoolLocation: string;
    applicantImageUri: string;
    desiredMajor: {
      firstDesiredMajor: MajorType;
      secondDesiredMajor: MajorType;
      thirdDesiredMajor: MajorType;
    };
    screening: ScreeningType;
  };
}

export interface ApplicationDataType {
  data: CommonApplicationResponseType;
}
