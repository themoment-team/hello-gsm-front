import React from 'react';
import * as S from './style';

const ApplyBarBox: React.FC = () => {
  const BarElements = [
    '증명사진',
    '이름',
    '성별',
    '생년월일',
    '주소지',
    '집 전화',
    '휴대폰 번호',
    '전형',
    '출신 중학교',
    '졸업일',
    '지원학과',
    '이름',
    '관계',
    '핸드폰 번호',
    '이름',
    '연락처',
  ];

  return (
    <S.BarBox>
      {BarElements.map((element: string, index: number) => (
        <S.BarElement key={index}>{element}</S.BarElement>
      ))}
    </S.BarBox>
  );
};

export default React.memo(ApplyBarBox);
