interface SizeType {
  readonly mobile: string;
  readonly tablet: string;
  readonly laptop: string;
}

const size: SizeType = {
  mobile: '640px',
  tablet: '960px',
  laptop: '1080px',
} as const;

const device: SizeType = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
} as const;

export default device;
