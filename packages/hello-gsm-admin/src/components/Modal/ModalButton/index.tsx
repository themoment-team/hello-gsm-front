import React, { ButtonHTMLAttributes } from 'react';

import * as S from './style';
interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: '다음' | '확인';
  showModalOption?: number;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonTitle, ...props }) => {
  return <S.ModalButton {...props}>{buttonTitle}</S.ModalButton>;
};

export default ModalButton;
