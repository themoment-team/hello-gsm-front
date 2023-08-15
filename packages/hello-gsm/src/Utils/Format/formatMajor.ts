type MajorType = 'SW' | 'IOT' | 'AI' | '';

const formatMajor = (major: MajorType) => {
  switch (major) {
    case 'SW':
      return '소프트웨어개발과';
    case 'IOT':
      return '스마트 IoT과';
    case 'AI':
      return '인공지능과';
    default:
      return '';
  }
};
export default formatMajor;
