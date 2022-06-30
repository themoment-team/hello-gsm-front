import { NextPage } from 'next';
import { InspectionIcon } from 'Assets/svg';
import * as S from './style';
import { css } from '@emotion/react';

const InspectionPage: NextPage = () => {
  return (
    <S.InspectionPage>
      <S.ContentWrap>
        <InspectionIcon />
        <S.InspectionDesc>점검 중 입니다</S.InspectionDesc>
        <S.InspectionUnderBar />
      </S.ContentWrap>
      <S.SkyBlueBall />
      <S.BlueBall
        css={css`
          top: 45%;
          left: 75%;
        `}
      />
      <S.BlueBall
        css={css`
          top: 70%;
          left: 20%;
        `}
      />
      <S.GreenBall />
    </S.InspectionPage>
  );
};

export default InspectionPage;
