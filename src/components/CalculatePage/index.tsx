import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';

const CalculatePage: NextPage = () => {
  return (
    <>
      <Header />
      <S.CalculatePage>
        <S.Title>성적입력</S.Title>
      </S.CalculatePage>
    </>
  );
};

export default CalculatePage;
