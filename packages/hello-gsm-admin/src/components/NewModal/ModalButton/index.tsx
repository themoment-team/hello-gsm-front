import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';

interface ModalButtonProps {
  isConfirm: boolean;
}

const ModalButton: React.FC<ModalButtonProps> = ({ isConfirm }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return <S.ModalButton>{isConfirm ? '확인' : '다음'}</S.ModalButton>;
};

export default ModalButton;
