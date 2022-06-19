export interface ApplicationType {
  photo: File;
  application: {
    teacherCellphoneNumber: string;
    schoolName: string;
    guardianCellphoneNumber: string;
    screening: string;
  };
  applicationDetail: {
    telephoneNumber: string;
    address: string;
    addressDetails: string;
    guardianName: string;
    guardianRelation: string;
    educationStatus: string;
    graduationYear: string;
    graduationMonth: string;
    firstWantedMajor: string;
    secondWantedMajor: string;
    thirdWantedMajor: string;
    teacherName: string;
    schoolLocation: string;
  };
}

export interface ScoreType {
  score2_1: number;
  score2_2: number;
  score3_1: number;
  generalCurriculumScoreSubtotal: number;
  artSportsScore: number;
  attendanceScore: number;
  curriculumScoreSubtotal: number;
  volunteerScore: number;
  nonCurriculumScoreSubtotal: number;
  scoreTotal: number;
}
