import React from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
const SlideBar: React.FC = () => {
  return (
    <>
      <S.SideBar>
        <S.Title>Hello, GSM Admin</S.Title>
        <S.ApplicantListBox>
          <I.DocumentIcon />
          <S.ApplicantList>지원자 리스트</S.ApplicantList>
        </S.ApplicantListBox>
        <S.LogoutBox>
          <S.InnerLogoutBox>
            <I.LogoutIcon />
            <S.Logout>로그아웃</S.Logout>
          </S.InnerLogoutBox>
        </S.LogoutBox>
      </S.SideBar>
    </>
  );
};

export default SlideBar;
