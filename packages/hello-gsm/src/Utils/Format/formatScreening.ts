type ScreeningType =
  | 'GENERAL'
  | 'SOCIAL'
  | 'SPECIAL_VETERANS'
  | 'SPECIAL_ADMISSION';

const formatScreening = (screening: ScreeningType) => {
  switch (screening) {
    case 'GENERAL':
      return '일반전형';
    case 'SOCIAL':
      return '사회통합전형';
    case 'SPECIAL_ADMISSION':
      return '특례입학대상자';
    case 'SPECIAL_VETERANS':
      return '국가보훈대상자';
    default:
      return '일반전형';
  }
};
export default formatScreening;
