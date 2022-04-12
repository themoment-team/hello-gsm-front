import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';

const Header: React.FC = () => {
  const pathname: string = useRouter().pathname;

  const select = (navPath: string) =>
    navPath === pathname ? { color: '#ffffff' } : undefined;

  return (
    <S.Header>
      <S.Logo>
        <Link href="/" passHref>
          <S.LogoContent>Hello, GSM</S.LogoContent>
        </Link>
      </S.Logo>
      <S.NavBar>
        <Link href="/" passHref>
          <S.NavContent style={select('/')}>홈으로</S.NavContent>
        </Link>
        <Link href="/school" passHref>
          <S.NavContent style={select('/school')}>학교소개</S.NavContent>
        </Link>
        <Link href="/about" passHref>
          <S.NavContent style={select('/about')}>팀소개</S.NavContent>
        </Link>
        <Link href="/faq" passHref>
          <S.NavContent style={select('/faq')}>자주 묻는 질문</S.NavContent>
        </Link>
      </S.NavBar>
      <S.MemberBox>
        <Link href="/signin" passHref>
          <S.MemberContent>로그인</S.MemberContent>
        </Link>
        <Link href="/signup" passHref>
          <S.MemberContent>회원가입</S.MemberContent>
        </Link>
      </S.MemberBox>
    </S.Header>
  );
};

export default Header;
