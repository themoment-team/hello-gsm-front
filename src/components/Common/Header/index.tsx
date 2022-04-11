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
        <Link href="/asdf">
          <S.NavContent>홈으로</S.NavContent>
        </Link>
        <Link href="/asdf">
          <S.NavContent>학교소개</S.NavContent>
        </Link>
        <Link href="/asdf">
          <S.NavContent>팀소개</S.NavContent>
        </Link>
        <Link href="/asdf">
          <S.NavContent>자주 묻는 질문</S.NavContent>
        </Link>
      </S.NavBar>
      <S.MemberBox>
        <Link href="/login">
          <a>로그인</a>
        </Link>
        <Link href="signup">
          <a>회원가입</a>
        </Link>
      </S.MemberBox>
    </S.Header>
  );
}

export default Header;