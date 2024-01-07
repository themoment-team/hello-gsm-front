import { css, Global } from '@emotion/react';
import React from 'react';

import useStore from 'stores/StoreContainer';

import * as S from './style';

const MainNonLoginModal = () => {
  const { setShowMainNonLoginModal } = useStore();

  const invisible = () => {
    setShowMainNonLoginModal(false);
    localStorage.setItem(
      'mainNonLoginModalInvisible',
      new Date().getDate().toString(),
    );
  };

  return (
    <S.MainResultModal>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <S.MainResultModalBox>
        <S.MainResultModalContent>
          <S.Text>결과 확인을 위해 로그인을 해주세요.</S.Text>
        </S.MainResultModalContent>
        <S.InvisibleButtonWrap>
          <S.InvisibleButton onClick={invisible}>
            오늘 하루 보지 않기
          </S.InvisibleButton>
        </S.InvisibleButtonWrap>
        <S.ConfirmButton onClick={() => setShowMainNonLoginModal(false)}>
          확인
        </S.ConfirmButton>
      </S.MainResultModalBox>
    </S.MainResultModal>
  );
};

export default MainNonLoginModal;
