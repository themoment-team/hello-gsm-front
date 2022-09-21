import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const ModalDescription: React.FC = () => {
  const { modalRegistrationNumber, modalName } = useStore();

  return (
    <S.DescriptionBox>
      <S.RegistrationNumber>
        접수번호 {modalRegistrationNumber}
      </S.RegistrationNumber>
      <S.Description>{modalName}님의 2차 점수를 입력해주세요.</S.Description>
    </S.DescriptionBox>
  );
};

export default ModalDescription;
