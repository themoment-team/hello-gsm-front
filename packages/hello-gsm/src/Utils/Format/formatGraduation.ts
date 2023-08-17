import { GraduationStatusType } from 'type/application';

type GraduationObjectType = {
  [key in GraduationStatusType]: string;
};

const formatGraduation = (graduation: GraduationStatusType) => {
  const graduationObject: GraduationObjectType = {
    CANDIDATE: '졸업예정',
    GRADUATE: '졸업',
    GED: '검정고시',
  };

  return graduationObject[graduation];
};

export default formatGraduation;
