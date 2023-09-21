import React from 'react';
import * as S from './style';

interface ModalInputProps {
  setInputValue: (value: string) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ setInputValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.ModalInput>
      <S.InputTitle>2차 점수</S.InputTitle>
      <S.Input placeholder="2차 점수를 입력해주세요" onChange={handleChange} />
    </S.ModalInput>
  );
};

export default ModalInput;
