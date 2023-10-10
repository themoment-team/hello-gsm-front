import { ScreeningType } from 'type/application';

type ScreeningObjectType = {
  [key in ScreeningType]: string;
};

const formatScreening = (screening: ScreeningType | undefined) => {
  if (!screening) return '';
  const screeningObject: ScreeningObjectType = {
    GENERAL: '일반전형',
    SOCIAL: '사회통합전형',
    SPECIAL_ADMISSION: '특례입학대상자',
    SPECIAL_VETERANS: '국가보훈대상자',
    '': '',
  };

  return screeningObject[screening];
};

export default formatScreening;
