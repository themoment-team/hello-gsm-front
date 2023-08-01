import React, { useState } from 'react';
import * as S from './style';

interface ModalButtonProps {
  isConfirm: boolean;
}

const ModalButton: React.FC<ModalButtonProps> = ({ isConfirm }) => {
  return <S.ModalButton>{isConfirm ? '확인' : '다음'}</S.ModalButton>;
};

export default ModalButton;
