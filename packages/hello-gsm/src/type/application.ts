type MajorType = 'SW' | 'IOT' | 'AI' | '';

export type GraduationStatusType = 'CANDIDATE' | 'GRADUATE' | 'GED';

type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';

type EvaluationStatusType = 'NOT_YET' | 'PASS' | 'FALL';

interface CommonApplicationResponseType {
  id: number;
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
  middleSchoolGrade: string;
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

export interface GEDApplicationResponseType
  extends CommonApplicationResponseType {
  middleSchoolGrade: string;
  admissionGrade: {
    totalScore: number;
    percentileRank: number;
    gedTotalScore: number;
    gedMaxScore: number;
  };
}

export interface ApplicationResponseType extends CommonApplicationResponseType {
  admissionGrade: {
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
  };
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
  middleSchoolGrade: string;
  schoolName: string;
  schoolLocation: string;
  screening: ScreeningType;
}

export interface GetApplicationType {
  user_idx: number;
  userImg: string;
  name: string;
  birth: Date;
  gender: 'MALE' | 'FEMALE';
  cellphoneNumber: string;
  application_image?: {
    idPhotoUrl: string;
  };
  application?: {
    applicationIdx: number;
    registrationNumber?: number;
    isFinalSubmission?: boolean;
    isDocumentReception?: boolean;
    firstResultScreening?: string;
    finalResultScreening?: string;
    guardianCellphoneNumber: string;
    teacherCellphoneNumber?: string;
    schoolName?: string;
    screening: ScreeningType;
    user_idx: number;
    application_score?: {
      applicationIdx: number;
      score1_1: number;
      score1_2: number;
      score2_1: number;
      score2_2: number;
      score3_1: number;
      score3_2: number;
      generalCurriculumScoreSubtotal: number;
      artSportsScore: number;
      curriculumScoreSubtotal: number;
      attendanceScore: number;
      volunteerScore: number;
      nonCurriculumScoreSubtotal: number;
      personalityEvaluationScore?: number;
      scoreTotal: number;
      rankPercentage: number;
    };
    application_details?: {
      applicationIdx: number;
      address: string;
      addressDetails?: string;
      telephoneNumber?: string;
      guardianName: string;
      guardianRelation: string;
      teacherName?: string;
      schoolLocation?: string;
      educationStatus: EvaluationStatusType;
      graduationYear: string;
      graduationMonth: string;
      firstWantedMajor: MajorType;
      secondWantedMajor: MajorType;
      thirdWantedMajor: MajorType;
      majorResult?: string;
    };
  };
}
