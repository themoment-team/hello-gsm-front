type GenderType = 'MALE' | 'FEMALE';

type GenderObjectType = {
  [key in GenderType]: string;
};

const formatGender = (gender: GenderType) => {
  const genderObject: GenderObjectType = {
    MALE: '남자',
    FEMALE: '여자',
  };

  return genderObject[gender];
};

export default formatGender;
