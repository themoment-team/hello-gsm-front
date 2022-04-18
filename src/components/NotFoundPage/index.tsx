import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.NotFoundPage>
        <S.SkyBlueBall />
        <S.GreenBall />
        <S.BlueBall />
        <S.BlueBall style={{ right: '20vw', top: '33vh' }} />
        <S.Wrapper>
          <I.NotFound />
          <p>페이지를 찾을 수 없어요..</p>
        </S.Wrapper>
      </S.NotFoundPage>
    </>
  );
};

export default NotFoundPage;
