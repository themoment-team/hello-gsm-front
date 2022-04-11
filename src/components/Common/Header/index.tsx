import Link from 'next/link';
import * as S from './style';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <S.LogoContent>Hello, GSM</S.LogoContent>
        </Link>
      </S.Logo>
      <S.NavBar>
        <Link href="/">
          <S.NavContent>홈으로</S.NavContent>
        </Link>
        <Link href="/school">
          <S.NavContent>학교소개</S.NavContent>
        </Link>
        <Link href="/team">
          <S.NavContent>팀소개</S.NavContent>
        </Link>
        <Link href="/faq">
          <S.NavContent>자주 묻는 질문</S.NavContent>
        </Link>
      </S.NavBar>
      <S.MemberBox>
        <Link href="/signin">
          <S.MemberContent>로그인</S.MemberContent>
        </Link>
        <Link href="/signup">
          <S.MemberContent>회원가입</S.MemberContent>
        </Link>
      </S.MemberBox>
    </S.Header>
  );
}

export default Header; 