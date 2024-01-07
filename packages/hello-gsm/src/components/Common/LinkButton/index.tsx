import { css } from '@emotion/react';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

import { theme } from 'styles/theme';

import * as S from './style';

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  color?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  color = theme.color.gray['060'],
  ...props
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <S.Button
            css={css`
              color: ${color};
              border: 1px solid ${color};
            `}
            {...props}
          >
            {children}
          </S.Button>
        </Link>
      ) : (
        <S.Button
          css={css`
            color: ${color};
            border: 1px solid ${color};

            &:disabled {
              cursor: default;
            }
          `}
          {...props}
        >
          {children}
        </S.Button>
      )}
    </>
  );
};

export default LinkButton;
