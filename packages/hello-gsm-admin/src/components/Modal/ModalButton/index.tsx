import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isConfirm: boolean;
  buttonTitle: '다음' | '확인';
}

const ModalButton: React.FC<ModalButtonProps> = ({
  isConfirm,
  buttonTitle,
  ...props
}) => {
  return (
    <S.ModalButton isConfirm={isConfirm} disabled={isConfirm} {...props}>
      {buttonTitle}
    </S.ModalButton>
  );
};

export default ModalButton;
