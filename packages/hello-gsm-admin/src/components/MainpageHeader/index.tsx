import React from 'react';
import * as S from './style';

const MainpageHeader: React.FC = () => {
  const headerElement = [
    '지원자 번호',
    '서류여부',
    '성명',
    '전형',
    '출신중학교',
    '지원자 연락처',
    '부모님 연락처',
    '담임선생님 연락처',
    '1차 결과',
    '2차 점수',
    '2차 결과',
  ];

  return (
    <S.Header>
      <S.ContentBox>
        {headerElement.map((element: string, index: number) => (
          <S.HeaderElement key={index}>{element}</S.HeaderElement>
        ))}
      </S.ContentBox>
    </S.Header>
  );
};

export default React.memo(MainpageHeader);
