import type { NextPage } from 'next';

import { useEffect } from 'react';

import { auth } from 'apis';
import * as I from 'assets/svg';
import useStore from 'stores/StoreContainer';

import NavLink from './NavLink';
import * as S from './style';

const SideBar: NextPage = () => {
  const { logged, showSideBar, setShowSideBar } = useStore();

  /**
   * table 크기 이상이면 sidebar 애니메이션 없앰, sidebar display:none 시킴
   */
  useEffect(() => {
    window.onresize = () => {
      window.innerWidth > 960 && setShowSideBar(null);
    };
  }, [showSideBar, setShowSideBar]);

  return (
    <>
      <S.Background animation={showSideBar} />
      <S.SideBar animation={showSideBar}>
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
            <a href={auth.logout()}>
              <S.LogOut>로그아웃</S.LogOut>
            </a>
          ) : (
            <S.Auth>
              <NavLink href="/auth/signin">로그인</NavLink>
            </S.Auth>
          )}
        </S.NavSection>
      </S.SideBar>
    </>
  );
};

export default SideBar;
