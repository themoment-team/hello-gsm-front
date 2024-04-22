import Link from 'next/link';

import * as S from './style';

interface BubbleButtonProps {
  link: string;
  children: React.ReactNode;
}

const BubbleButton: React.FC<BubbleButtonProps> = ({ children, link }) => {
  return (
    <Link href={link} passHref>
      <S.ToCalculator>{children}</S.ToCalculator>
    </Link>
  );
};

export default BubbleButton;
