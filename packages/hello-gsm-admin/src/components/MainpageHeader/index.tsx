import React from 'react';
import * as S from './style';

const MainpageHeader: React.FC = () => {
  const headerElement = [
    '지원자 번호',
    '성명',
    '전형',
    '출신중',
    '서류제출',
    '지원자연락처',
    '부모님연락처',
    '담임선생님연락처',
    '1차',
    '2차',
  ];

  return (
    <S.Header>
      {headerElement.map((element: string, index: number) => (
        <S.HeaderElement key={index}>{element}</S.HeaderElement>
      ))}
    </S.Header>
  );
};

export default React.memo(MainpageHeader);
