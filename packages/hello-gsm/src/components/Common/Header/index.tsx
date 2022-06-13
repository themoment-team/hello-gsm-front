import { css } from '@emotion/react';
import auth from 'Api/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  const { logged } = useStore();

  const select = (navPath: string) =>
    navPath === pathname && { color: '#ffffff' };

  const logout = async () => {
    // try {
    //   await auth.logout();
    //   window.location.reload();
    // } catch (error: any) {
    //   if (error.response.status === 401) {
    //     try {
    //       await auth.refresh();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   console.log(error);
    // }
    try {
      console.log('start try');
      await auth.refresh();
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };

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
      </S.HeaderWrap>
    </S.Header>
  );
};

export default React.memo(Header);
