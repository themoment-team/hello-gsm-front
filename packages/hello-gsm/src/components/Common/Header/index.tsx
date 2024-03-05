import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { auth } from 'apis';
import * as I from 'assets/svg';
import useStore from 'stores/StoreContainer';

import { SideBar } from 'components';

import { isFinalEnd } from 'shared/Date/afterApply';

import * as S from './style';

const Header = () => {
  const { pathname } = useRouter();
  const [isLogoutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const [isFinalPeriod] = useState<boolean>(isFinalEnd);

  const { logged, setShowSideBar } = useStore();

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLogoutClicked) {
      toast.error('로그아웃 중입니다. 잠시만 기다려주세요.');
      return e.preventDefault();
    }

    return setIsLogoutClicked(true);
  };

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
        <S.LogoContent href="/" passHref>Hello, GSM</S.LogoContent>
        <S.NavBar>
            <S.NavContent href="/" passHref css={select('/')}>홈으로</S.NavContent>
            <S.NavContent href="/school" passHref css={select('/school')}>학교소개</S.NavContent>
            <S.NavContent href="/faq" passHref css={select('/faq')}>자주 묻는 질문</S.NavContent>
            <S.NavContent href="/about" passHref css={select('/about')}>팀소개</S.NavContent>
        </S.NavBar>
        {!isFinalPeriod &&
          (!logged ? (
            <S.MemberBox
              css={css`
                justify-content: flex-end;
              `}
            >
              <Link href="/auth/signin" passHref>
                <S.AuthButton>로그인하기</S.AuthButton>
              </Link>
            </S.MemberBox>
          ) : (
            <S.MemberBox>
              <Link href="/mypage" passHref>
                <S.NavContent css={select('/mypage')}>마이페이지</S.NavContent>
              </Link>
              <a href={auth.logout()} onClick={handleLogoutClick}>
                <S.AuthButton>로그아웃</S.AuthButton>
              </a>
            </S.MemberBox>
          ))}
        <S.HamBurger onClick={() => setShowSideBar(true)}>
          <I.HamburgerButton />
        </S.HamBurger>
      </S.HeaderWrap>
      <SideBar />
    </>
  );
};

export default React.memo(Header);
