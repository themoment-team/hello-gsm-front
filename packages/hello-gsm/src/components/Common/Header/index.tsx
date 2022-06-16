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
  const { pathname, replace } = useRouter();

  const { logged, setShowSideBar } = useStore();

  const select = (navPath: string) =>
    navPath === pathname && { color: '#ffffff' };

  const logout = async () => {
    try {
      await auth.logout();
      replace('/');
      location.reload();
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 logout 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          logout();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

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
          <Link href="/about" passHref>
            <S.NavContent css={select('/about')}>팀소개</S.NavContent>
          </Link>
          <Link href="/faq" passHref>
            <S.NavContent css={select('/faq')}>자주 묻는 질문</S.NavContent>
          </Link>
        </S.NavBar>
        {!logged ? (
          <S.MemberBox
            css={css`
              justify-content: center;
            `}
          >
            <Link href="/auth/signin" passHref>
              <S.MemberContent css={select('/auth/signin')}>
                로그인
              </S.MemberContent>
            </Link>
          </S.MemberBox>
        ) : (
          <S.MemberBox>
            <Link href="/mypage" passHref>
              <S.MemberContent css={select('/mypage')}>내 정보</S.MemberContent>
            </Link>
            <S.Logout onClick={logout}>로그아웃</S.Logout>
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
