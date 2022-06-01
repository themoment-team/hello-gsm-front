import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from './style';
import * as I from 'Assets/svg';
import { useState } from 'react';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';

const SideBar: NextPage = () => {
  const { pathname } = useRouter();
  const [logged, setLogged] = useState(true);
  const select = (navPath: string) =>
    navPath === pathname && { color: '#ffffff' };
  const { showSideBar, setShowSideBar } = useStore();
  //   const [animation, setAnimation] = useState(false);
  console.log(showSideBar);
  return (
    <>
      <S.Background
        css={css`
          animation-name: ${showSideBar ? 'in' : 'out'};
          display: ${showSideBar == null && 'none'};
        `}
      />
      <S.SideBar
        css={css`
          animation-name: ${showSideBar ? 'slidein' : 'slideout'};
          display: ${showSideBar == null && 'none'};
          display: ${showSideBar && 'flex'};
        `}
      >
        <S.CloseSideBar onClick={setShowSideBar}>
          <I.SideBarButton />
        </S.CloseSideBar>
        <S.NavSection>
          <S.LinkWrapper>
            <Link href="/" passHref>
              <S.NavLink css={select('/')}>홈으로</S.NavLink>
            </Link>
            <Link href="/school" passHref>
              <S.NavLink css={select('/school')}>학교소개</S.NavLink>
            </Link>
            <Link href="/about" passHref>
              <S.NavLink css={select('/about')}>팀소개</S.NavLink>
            </Link>
            <Link href="/faq" passHref>
              <S.NavLink css={select('/faq')}>자주 묻는 질문</S.NavLink>
            </Link>
            {logged && (
              <Link href="/mypage" passHref>
                <S.NavLink css={select('/mypage')}>내정보</S.NavLink>
              </Link>
            )}
          </S.LinkWrapper>
          <S.LogOut>
            <S.NavLink onClick={() => setLogged(false)}>로그아웃</S.NavLink>
          </S.LogOut>
        </S.NavSection>
      </S.SideBar>
    </>
  );
};

export default SideBar;
