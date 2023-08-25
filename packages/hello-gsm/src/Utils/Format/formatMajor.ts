import { MajorType } from 'type/application';

type MajorObjectType = {
  [key in MajorType]: string;
};
const formatMajor = (major: MajorType | null): string => {
  if (major === null) return '';

  const majorObject: MajorObjectType = {
    SW: '소프트웨어개발과',
    IOT: '스마트 IoT과',
    AI: '인공지능과',
    '': '',
  };

  return majorObject[major];
};

export default formatMajor;
