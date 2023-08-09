import React from 'react';
import * as S from './style';

interface ModalButtonProps {
  isConfirm: boolean;
  buttonTitle: '다음' | '확인';
  onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  isConfirm,
  onClick,
  buttonTitle,
}) => {
  return (
    <S.ModalButton disabled={isConfirm} isConfirm={isConfirm} onClick={onClick}>
      {buttonTitle}
    </S.ModalButton>
  );
};

export default ModalButton;
