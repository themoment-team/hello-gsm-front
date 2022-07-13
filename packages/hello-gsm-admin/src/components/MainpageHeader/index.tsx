import { css } from '@emotion/react';
import React from 'react';
import * as S from './style';

const MainpageHeader: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderElement>지원자 번호</S.HeaderElement>
      <S.HeaderElement>성명</S.HeaderElement>
      <S.HeaderElement>전형</S.HeaderElement>
      <S.HeaderElement
        css={css`
          width: 140px;
        `}
      >
        출신중
      </S.HeaderElement>
      <S.HeaderElement>서류제출</S.HeaderElement>
      <S.HeaderElement>지원자연락처</S.HeaderElement>
      <S.HeaderElement>부모님연락처</S.HeaderElement>
      <S.HeaderElement>담임선생님연락처</S.HeaderElement>
      <S.HeaderElement
        css={css`
          width: 40px;
        `}
      >
        1차
      </S.HeaderElement>
      <S.HeaderElement
        css={css`
          width: 40px;
        `}
      >
        2차
      </S.HeaderElement>
    </S.Header>
  );
};

export default MainpageHeader;
