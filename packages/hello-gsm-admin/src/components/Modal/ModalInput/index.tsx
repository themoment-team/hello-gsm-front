import React from 'react';
import { ApplicationListType } from 'Types/application';
import * as S from './style';

interface ModalInputProps {
  data: ApplicationListType;
  setInputValue: (value: number) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ data, setInputValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);
    setInputValue(numericValue);
  };

  return (
    <S.ModalInput>
      <S.InputTitle>2차 점수</S.InputTitle>
      <S.Input
        placeholder="2차 점수를 입력해주세요"
        onChange={handleChange}
        defaultValue={data.secondScore ?? 0}
      />
    </S.ModalInput>
  );
};

export default ModalInput;
