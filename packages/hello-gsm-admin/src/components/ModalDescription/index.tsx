import React from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';

const ModalDescription: React.FC = () => {
  const { passModalRegistrationNumber, passModalName, passModalPeriod } =
    useStore();

  return (
    <S.DescriptionBox>
      <S.RegistrationNumber>
        접수번호 {passModalRegistrationNumber}
      </S.RegistrationNumber>
      <S.Description>
        {passModalName}님의 {passModalPeriod}차 합격 여부를 선택해주세요.
      </S.Description>
    </S.DescriptionBox>
  );
};

export default ModalDescription;
