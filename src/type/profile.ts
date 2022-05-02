export interface ProfileType {
  id: number;
  name: string;
  gender: string;
  address: string;
  homeNumber: string;
  phoneNumber: string;
  birth: string;
  middleSchool: string;
  area: string;
  photoUrl: string;
  type: string;
  graduated: string;
  socialType?: string;
  total: number;
  class: ClassType;
  guardian: GuardianType;
  teacher: TeacherType;
  subject: SubjectType;
  nonSubject: nonSubjectType;
}
interface ClassType {
  firstClass: string;
  secondClass: string;
  thirdClass: string;
}

interface GuardianType {
  name: string;
  relation: string;
  phoneNumber: string;
}

interface TeacherType {
  phoneNumber: string;
}

interface SubjectType {
  one_one: number;
  one_two: number;
  two_one: number;
  two_two: number;
  three_one: number;
  artsAndSports: number;
  subTotal: number;
}

interface nonSubjectType {
  attendance: number;
  volunteer: number;
  subTotal: number;
}
