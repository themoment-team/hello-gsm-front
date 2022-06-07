import type { NextPage } from 'next';

import * as S from './style';
import * as I from 'Assets/svg';
import { useEffect, useState } from 'react';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';
import NavLink from './NavLink';

const SideBar: NextPage = () => {
  const [logged, setLogged] = useState(true);

  const { showSideBar, setShowSideBar } = useStore();

  /**
   * table 크기 이상이면 sidebar 애니메이션 없앰
   */
  useEffect(() => {
    window.onresize = () => {
      window.innerWidth > 960 && setShowSideBar(null);
    };
  }, [showSideBar, setShowSideBar]);
  return (
    <>
      <S.Background
        animation={showSideBar}
        css={css`
          display: ${showSideBar == null && 'none'};
        `}
      />
      <S.SideBar
        css={css`
          display: ${showSideBar == null && 'none'};
        `}
        animation={showSideBar}
      >
        <S.CloseSideBar onClick={() => setShowSideBar(false)}>
          <I.SideBarButton />
        </S.CloseSideBar>
        <S.NavSection>
          <S.LinkWrapper>
            <NavLink href="/">홈으로</NavLink>
            <NavLink href="/school">학교소개</NavLink>
            <NavLink href="/about">팀소개</NavLink>
            <NavLink href="/faq">자주 묻는 질문</NavLink>
            {logged && <NavLink href="/mypage">내정보</NavLink>}
          </S.LinkWrapper>

          {logged ? (
            <S.LogOut onClick={() => setLogged(false)}>로그아웃</S.LogOut>
          ) : (
            <S.Auth>
              <NavLink href="/auth/signin">로그인</NavLink>
              <NavLink href="/auth/signup">회원가입</NavLink>
            </S.Auth>
          )}
        </S.NavSection>
      </S.SideBar>
    </>
  );
};

export default SideBar;
