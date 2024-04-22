import { GenderType } from 'types/application';

type GenderObjectType = {
  [key in GenderType]: string;
};

const formatGender = (gender: GenderType | undefined) => {
  if (gender === undefined) return '';
  const genderObject: GenderObjectType = {
    MALE: '남자',
    FEMALE: '여자',
  };

  return genderObject[gender];
};

export default formatGender;
