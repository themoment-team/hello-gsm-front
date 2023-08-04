import React from 'react';
import * as S from './style';

interface ModalButtonProps {
  isConfirm: boolean;
}

const ModalButton: React.FC<ModalButtonProps> = ({ isConfirm }) => {
  return (
    <S.ModalButton isConfirm={isConfirm}>
      {isConfirm ? '다음' : '확인'}
    </S.ModalButton>
  );
};

export default ModalButton;
