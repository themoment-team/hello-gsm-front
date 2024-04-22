import { useRouter } from 'next/router';

import React from 'react';

import { css } from '@emotion/react';

import auth from 'Api/auth';
import * as I from 'Assets/svg';

import * as S from './style';

const SlideBar = () => {
  const { push, pathname } = useRouter();
  return (
    <S.SideBar className="sideBar">
      <S.Title>Hello, GSM Admin</S.Title>
      <S.ApplicantListBox
        onClick={() => push('/')}
        css={css`
          background-color: ${pathname === '/' ? '#fafafa' : '#ffffff'};
        `}
      >
        <I.DocumentIcon />
        <S.ApplicantList>지원자 리스트</S.ApplicantList>
      </S.ApplicantListBox>
      <S.LogoutBox>
        <S.InnerLogoutBox>
          <I.LogoutIcon />
          <S.Logout href={auth.logout()}>로그아웃</S.Logout>
        </S.InnerLogoutBox>
      </S.LogoutBox>
    </S.SideBar>
  );
};

export default SlideBar;
