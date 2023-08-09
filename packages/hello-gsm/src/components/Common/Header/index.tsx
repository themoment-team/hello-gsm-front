import { css } from '@emotion/react';
import auth from 'Api/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';
import * as I from 'Assets/svg';
import { SideBar } from 'components';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  const { logged, setShowSideBar } = useStore();

  const select = (navPath: string) =>
    navPath === pathname &&
    css`
      font-weight: 700;
      &::after {
        content: '';
      }
    `;

  return (
    <>
      <S.HeaderWrap>
        <Link href="/" passHref>
          <S.LogoContent>Hello, GSM</S.LogoContent>
        </Link>
        <S.NavBar>
          <Link href="/" passHref>
            <S.NavContent css={select('/')}>홈으로</S.NavContent>
          </Link>
          <Link href="/school" passHref>
            <S.NavContent css={select('/school')}>학교소개</S.NavContent>
          </Link>
          <Link href="/faq" passHref>
            <S.NavContent css={select('/faq')}>자주 묻는 질문</S.NavContent>
          </Link>
          <Link href="/about" passHref>
            <S.NavContent css={select('/about')}>팀소개</S.NavContent>
          </Link>
        </S.NavBar>
        {!logged ? (
          <S.MemberBox
            css={css`
              justify-content: flex-end;
            `}
          >
            <Link href="/auth/signin" passHref>
              <S.AuthButton css={select('/auth/signin')}>
                로그인하기
              </S.AuthButton>
            </Link>
          </S.MemberBox>
        ) : (
          <S.MemberBox>
            <Link href="/mypage" passHref>
              <S.NavContent css={select('/mypage')}>내 정보</S.NavContent>
            </Link>
            <a href={auth.logout()}>
              <S.AuthButton>로그아웃</S.AuthButton>
            </a>
          </S.MemberBox>
        )}
        <S.HamBurger onClick={() => setShowSideBar(true)}>
          <I.HamburgerButton />
        </S.HamBurger>
      </S.HeaderWrap>
      <SideBar />
    </>
  );
};

export default React.memo(Header);
