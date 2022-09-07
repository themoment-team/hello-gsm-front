import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import * as S from './style';

const ImagePostLodingModal: React.FC = () => {
  return (
    <S.ImagePostLoadingModal>
      <Image src="/images/loading.gif" width={195} height={195} alt="loading" />
      <S.LoadingText>이미지를 저장 중 입니다..</S.LoadingText>
    </S.ImagePostLoadingModal>
  );
};

export default ImagePostLodingModal;
