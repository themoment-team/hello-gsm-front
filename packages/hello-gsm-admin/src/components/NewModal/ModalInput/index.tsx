import React from 'react';
import * as S from './style';

const ModalDescription: React.FC = () => {
  return (
    <div>
      <S.InputTitle>2차 점수</S.InputTitle>
      <S.ModalInput placeholder="2차 점수를 입력해주세요" />
    </div>
  );
};

export default ModalDescription;
