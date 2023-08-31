import React, { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';

interface ModalResultProps {
  handleOptionSelect: (optionId: number) => void;
}

const ModalSubmit: React.FC<ModalResultProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<number>(1);
  const handleButtonClick = (id: number) => {
    setSelectedButtonId(id);
    handleOptionSelect(id);
  };

  return (
    <S.ModalSubmit>
      <S.ModalOption onClick={() => handleButtonClick(1)}>
        <I.Submit isActive={selectedButtonId !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick(2)}>
        <I.NotSubmit isActive={selectedButtonId !== 2} />
      </S.ModalOption>
    </S.ModalSubmit>
  );
};

export default ModalSubmit;
