import React from 'react';
import * as S from './style';

const ApplyBarBox: React.FC = () => {
  return (
    <S.BarBox>
      <S.BarElement>증명사진</S.BarElement>
      <S.BarElement>이름</S.BarElement>
      <S.BarElement>성별</S.BarElement>
      <S.BarElement>생년월일</S.BarElement>
      <S.BarElement>주소지</S.BarElement>
      <S.BarElement>집 전화</S.BarElement>
      <S.BarElement>휴대폰 번호</S.BarElement>
      <S.BarElement>전형</S.BarElement>
      <S.BarElement>출신 중학교</S.BarElement>
      <S.BarElement>졸업일</S.BarElement>
      <S.BarElement>지원학과</S.BarElement>
      <S.BarElement>이름</S.BarElement>
      <S.BarElement>관계</S.BarElement>
      <S.BarElement>핸드폰 번호</S.BarElement>
      <S.BarElement>이름</S.BarElement>
      <S.BarElement>연락처</S.BarElement>
    </S.BarBox>
  );
};

export default React.memo(ApplyBarBox);
