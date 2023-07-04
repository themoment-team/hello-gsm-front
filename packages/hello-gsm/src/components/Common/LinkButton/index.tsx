import { css } from '@emotion/react';
import Link from 'next/link';
import * as S from './style';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  color: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href, color }) => {
  return (
    <Link href={href}>
      <S.Button
        css={css`
          color: ${color};
          border: 1px solid ${color};
        `}
      >
        {children}
      </S.Button>
    </Link>
  );
};

export default LinkButton;
