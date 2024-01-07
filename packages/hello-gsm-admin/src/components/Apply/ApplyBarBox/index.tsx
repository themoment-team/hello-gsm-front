import React from 'react';

import * as S from './style';

const ApplyBarBox: React.FC<{ isSpecialScreening: boolean }> = ({
  isSpecialScreening,
}) => {
  const BarElements = [
    '증명사진',
    '성명',
    '성별',
    '생년월일',
    '주소지',
    '집 전화(선택)',
    '휴대폰 번호',
    '전형',
    '출신 중학교',
    '졸업상태',
    '지원학과',
    '성명',
    '관계',
    '핸드폰 번호',
    '성명',
    '연락처',
  ];

  return (
    <S.BarBox>
      {BarElements.map((element: string, index: number) => (
        <S.BarElement key={index} isSpecialScreening={isSpecialScreening}>
          {element}
        </S.BarElement>
      ))}
    </S.BarBox>
  );
};

export default React.memo(ApplyBarBox);
