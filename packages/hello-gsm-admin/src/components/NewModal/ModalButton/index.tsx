import React from 'react';
import * as S from './style';

interface ModalButtonProps {
  isConfirm: boolean;
  onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ isConfirm, onClick }) => {
  return (
    <S.ModalButton disabled={isConfirm} isConfirm={isConfirm} onClick={onClick}>
      다음
    </S.ModalButton>
  );
};

export default ModalButton;
