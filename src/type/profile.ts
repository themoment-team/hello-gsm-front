export interface ProfileType {
  applicant: ApplicantType;
  guardian: GuardianType;
  teacher: TeacherType;
  school: SchoolType;
  screening: ScreeningType;
  curriculum: CurriculumType;
  nonCurriculum: NonCurriculumType;
  scoreTotal: number;
  major: MajorType;
}

interface ApplicantType {
  registration_number: number;
  name: string;
  gender: '남자' | '여자';
  birth: string;
  address: string;
  contact: {
    telephone: string;
    cellphone: string;
  };
}

interface GuardianType {
  name: string;
  relation: string;
  cellphone: string;
}

interface TeacherType {
  name: string;
  cellphone: string;
}

interface SchoolType {
  name: string;
  educationStatus: string;
  area: string;
}

interface ScreeningType {
  screening: '일반전형' | '사회특별전형' | '특별전형';
  socialScreening: '기회균등전형' | '사회다양성전형'; 
}

interface CurriculumType {
  score1_1: number;
  score1_2: number;
  score2_1: number;
  score2_2: number;
  score3_1: number;
  artSportsScore: number;
  curriculumScore: number;
}

interface NonCurriculumType {
  attendanceScore: number;
  volunteerScore: number;
  nonCurriculumScore: number;
}

interface MajorType {
  firstWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  secondWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
  thirdWantedMajor: '소프트웨어 개발과' | '스마트 IOT과' | '인공지능과';
}
