export interface applicationType {
  address: string;
  addressDetails: string;
  telephoneNumber: string;
  screening: '일반전형' | '사회통합전형' | '특별전형';
  schoolName: string;
  schoolLocation: string;
  graduationYear: string;
  graduationMonth: string;
  educationStatus: '졸업예정' | '졸업' | '검정고시';
  firstWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  secondWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  thirdWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  guardianName: string;
  guardianRelation: string;
  guardianCellphoneNumber: string;
  teacherName: string;
  TeacherNumber: string;
}

export interface scoreType {
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
