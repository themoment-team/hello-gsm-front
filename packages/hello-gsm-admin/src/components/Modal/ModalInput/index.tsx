import React from 'react';
import * as S from './style';

const ModalInput: React.FC = () => {
  return (
    <S.ModalInput>
      <S.InputTitle>2차 점수</S.InputTitle>
      <S.Input placeholder="2차 점수를 입력해주세요" />
    </S.ModalInput>
  );
};

export default ModalInput;
