import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: '다음' | '확인';
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonTitle }) => {
  const { selectedOption } = useStore();
  return (
    <S.ModalButton
      isConfirm={selectedOption !== 0}
      disabled={selectedOption === 0}
    >
      {buttonTitle}
    </S.ModalButton>
  );
};

export default ModalButton;
