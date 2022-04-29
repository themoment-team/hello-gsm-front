import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as S from './style';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  const [logged, setLogged] = useState(true);

  const select = (navPath: string) =>
    navPath === pathname && { color: '#ffffff' };

  return (
    <S.Header>
      <S.HeaderWrap>
        <S.Logo>
          <Link href="/" passHref>
            <S.LogoContent>Hello, GSM</S.LogoContent>
          </Link>
        </S.Logo>
        <S.NavBar>
          <Link href="/" passHref>
            <S.NavContent css={select('/')}>홈으로</S.NavContent>
          </Link>
          <Link href="/school" passHref>
            <S.NavContent css={select('/school')}>학교소개</S.NavContent>
          </Link>
          <Link href="/about" passHref>
            <S.NavContent css={select('/about')}>팀소개</S.NavContent>
          </Link>
          <Link href="/faq" passHref>
            <S.NavContent css={select('/faq')}>자주 묻는 질문</S.NavContent>
          </Link>
        </S.NavBar>
        {!logged ? (
          <S.MemberBox>
            <Link href="/auth/signin" passHref>
              <S.MemberContent css={select('/auth/signin')}>로그인</S.MemberContent>
            </Link>
            <Link href="/auth/signup" passHref>
              <S.MemberContent css={select('/auth/signup')}>
                회원가입
              </S.MemberContent>
            </Link>
          </S.MemberBox>
        ) : (
          <S.MemberBox>
            <Link href="/mypage" passHref>
              <S.MemberContent css={select('/mypage')}>내 정보</S.MemberContent>
            </Link>
            <S.MemberContent onClick={() => setLogged(false)}>
              로그아웃
            </S.MemberContent>
          </S.MemberBox>
        )}
      </S.HeaderWrap>
    </S.Header>
  );
};

export default React.memo(Header);
