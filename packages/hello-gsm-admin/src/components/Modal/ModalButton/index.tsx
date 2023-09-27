import React, { ButtonHTMLAttributes, useEffect } from 'react';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: '다음' | '확인';
  showModalOption?: number;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  buttonTitle,
  showModalOption,
  ...props
}) => {
  const { selectedOption, isButtonActive, setIsButtonActive } = useStore();
  useEffect(() => {
    if (buttonTitle === '다음') {
      setIsButtonActive(showModalOption === 0 ? true : false);
    } else {
      setIsButtonActive(selectedOption === 0 ? true : false);
    }
  }, [buttonTitle, showModalOption, selectedOption]);
  return (
    <S.ModalButton
      isConfirm={isButtonActive}
      disabled={isButtonActive}
      {...props}
    >
      {buttonTitle}
    </S.ModalButton>
  );
};

export default ModalButton;
