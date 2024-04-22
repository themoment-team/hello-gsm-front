import { NextPage } from 'next';

import { useEffect, useState } from 'react';

import { css } from '@emotion/react';

import device from 'shared/config';

import { InspectionIcon } from 'assets/svg';

import * as S from './style';

const InspectionPage: NextPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.onresize = () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    };
  }, []);

  return (
    <S.InspectionPage>
      <S.ContentWrap>
        <InspectionIcon
          width={isMobile ? 172 : 217}
          height={isMobile ? 172 : 217}
        />
        <S.InspectionDesc>점검 중 입니다.</S.InspectionDesc>
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
