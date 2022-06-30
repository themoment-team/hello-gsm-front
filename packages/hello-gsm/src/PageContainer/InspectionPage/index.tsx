import { NextPage } from 'next';
import { InspectionIcon } from 'Assets/svg';
import * as S from './style';
import { css } from '@emotion/react';
import device from 'shared/config';

const InspectionPage: NextPage = () => {
  return (
    <S.InspectionPage>
      <S.ContentWrap>
        <InspectionIcon
          css={css`
            @media ${device.mobile} {
              width: 172px;
              height: 172px;
            }
          `}
        />
        <S.InspectionDesc>점검 중 입니다</S.InspectionDesc>
        <S.InspectionUnderBar />
      </S.ContentWrap>
      <S.SkyBlueBall />
      <S.BlueBall
        css={css`
          top: 45%;
          left: 75%;
          @media ${device.tablet} {
            top: 36%;
            left: 80%;
          }
        `}
      />
      <S.BlueBall
        css={css`
          top: 70%;
          left: 20%;
          @media ${device.tablet} {
            top: 50%;
          }
          @media ${device.mobile} {
            top: 55%;
            left: 15%;
          }
        `}
      />
      <S.GreenBall />
    </S.InspectionPage>
  );
};

export default InspectionPage;
