import { css, Global } from '@emotion/react';
import Image from 'next/image';
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
        <Image
          src="/images/loading.gif"
          width={195}
          height={195}
          alt="loading"
        />
        <S.LoadingText>이미지를 저장 중 입니다..</S.LoadingText>
      </S.ContentWrap>
    </S.ImagePostLoadingModal>
  );
};

export default ImagePostLodingModal;
