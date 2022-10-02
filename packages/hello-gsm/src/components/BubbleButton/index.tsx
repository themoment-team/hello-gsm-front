import Link from 'next/link';
import * as S from './style';

interface BubbleButtonProps {
  link: string;
  children: React.ReactNode;
}

const BubbleButton = ({ children, link }: BubbleButtonProps) => {
  return (
    <Link href={link} passHref>
      <S.ToCalculator>{children}</S.ToCalculator>
    </Link>
  );
};

export default BubbleButton;
