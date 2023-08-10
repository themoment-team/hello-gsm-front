import { css, useTheme } from '@emotion/react';
import Link from 'next/link';
import { PointColorType } from 'type/point';
import * as S from './style';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  color: PointColorType;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href, color }) => {
  const theme = useTheme();
  const pointColor = theme.color.primary[color];

  return (
    <Link href={href}>
      <S.Button
        css={css`
          color: ${pointColor};
          border: 1px solid ${pointColor};
        `}
      >
        {children}
      </S.Button>
    </Link>
  );
};

export default LinkButton;
