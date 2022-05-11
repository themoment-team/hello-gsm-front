import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as S from './style';
import * as I from '../../Assets/svg';

const CalculatePage: NextPage = () => {
  const Lines = ['일반교과', '체육•예술 교과', '비교과'];
  return (
    <>
      <Header />
      <S.CalculatePage>
        <S.Title>성적입력</S.Title>
        <S.LineList>
          {Lines.map((line, i) => (
            <S.Line key={i}>{line}</S.Line>
          ))}
        </S.LineList>
      </S.CalculatePage>
    </>
  );
};

export default CalculatePage;
