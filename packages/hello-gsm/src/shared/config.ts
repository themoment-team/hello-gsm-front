interface sizeType {
  readonly mobile: string;
  readonly tablet: string;
  readonly laptop: string;
}

const size: sizeType = {
  mobile: '640px',
  tablet: '960px',
  laptop: '1080px',
};

const device: sizeType = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export const BASE_URL = 'https://server.hellogsm.kr';

export default device;
