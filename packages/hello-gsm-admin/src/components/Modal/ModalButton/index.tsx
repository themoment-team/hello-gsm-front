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
  const {
    selectedOption,
    isButtonActive,
    setIsButtonActive,
    isScoreValue,
    isOptionSelect,
  } = useStore();
  useEffect(() => {
    console.log(selectedOption);
    if (buttonTitle === '다음') {
      setIsButtonActive(showModalOption === 0 ? true : false);
    } else {
      setIsButtonActive(false);
      if (isOptionSelect) {
        setIsButtonActive(selectedOption === 0 ? true : false);
      }
      if (isScoreValue !== null) {
        setIsButtonActive(false);
      }
    }
  }, [
    buttonTitle,
    showModalOption,
    selectedOption,
    isScoreValue,
    isOptionSelect,
    isButtonActive,
  ]);

  return <S.ModalButton {...props}>{buttonTitle}</S.ModalButton>;
};

export default ModalButton;
