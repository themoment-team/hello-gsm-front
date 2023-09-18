import { css } from '@emotion/react';

interface IconProps {
  turn: 'right' | 'left';
  disabled: boolean;
}

const Turn = {
  left: 0,
  right: '180',
} as const;

const PaginationIcon: React.FC<IconProps> = ({ turn, disabled }) => (
  <svg
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M18.1877 11.3891L9.61218 3.27408C9.17828 2.86301 8.48306 2.92187 8.12444 3.40003L7.83642 3.78405C7.52995 4.19268 7.58069 4.76659 7.9541 5.1151L15.454 12.1151L8.24212 18.7841C7.86871 19.1326 7.81797 19.7065 8.12444 20.1151L8.41245 20.4991C8.77107 20.9773 9.46629 21.0361 9.9002 20.6251L18.1877 12.841C18.6041 12.4466 18.6041 11.7835 18.1877 11.3891Z"
      fill={disabled ? '#E0E0E0' : '#000000'}
    />
  </svg>
);

export default PaginationIcon;
