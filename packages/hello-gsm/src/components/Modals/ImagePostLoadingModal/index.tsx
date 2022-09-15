import { css, Global } from '@emotion/react';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const ImagePostLodingModal: React.FC = () => {
  const { showImagePostLoadingModal } = useStore();

  return (
    <S.ImagePostLoadingModal>
      <Global
        styles={css`
          body {
            overflow: ${showImagePostLoadingModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.ContentWrap>
        <S.LoadingCircleBackGround>
          <S.LoadingCircle />
        </S.LoadingCircleBackGround>
        <S.LoadingText>이미지를 저장 중 입니다..</S.LoadingText>
      </S.ContentWrap>
    </S.ImagePostLoadingModal>
  );
};

export default ImagePostLodingModal;
