import React, { useState } from 'react';
import * as I from 'test/svg';
import * as S from './style';

interface ModalResultProps {
  handleOptionSelect: (optionId: number) => void;
}

const ModalResult: React.FC<ModalResultProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<number>(1);

  const handleButtonClick = (id: number) => {
    setSelectedButtonId(id);
    handleOptionSelect(id);
  };

  return (
    <S.ModalResult>
      <S.ModalOption onClick={() => handleButtonClick(1)}>
        <I.Pass isActive={selectedButtonId !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick(2)}>
        <I.Fail isActive={selectedButtonId !== 2} />
      </S.ModalOption>
    </S.ModalResult>
  );
};

export default ModalResult;
