import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import NavLink from './NavLink';
import auth from 'Api/auth';
import { useRouter } from 'next/router';

const SideBar: NextPage = () => {
  const { logged, showSideBar, setShowSideBar } = useStore();

  const { replace } = useRouter();

  /**
   * table 크기 이상이면 sidebar 애니메이션 없앰, sidebar display:none 시킴
   */
  useEffect(() => {
    window.onresize = () => {
      window.innerWidth > 960 && setShowSideBar(null);
    };
  }, [showSideBar, setShowSideBar]);

  const logout = async () => {
    try {
      await auth.logout();
      location.reload();
      replace('/');
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
            <S.LogOut onClick={logout}>로그아웃</S.LogOut>
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
