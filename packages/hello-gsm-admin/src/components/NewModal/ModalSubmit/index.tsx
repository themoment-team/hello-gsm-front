import React, { useState } from 'react';
import * as I from 'assets/svg';
import * as S from './style';

interface ModalResultProps {
  handleOptionSelect: (optionId: string) => void;
}

const ModalSubmit: React.FC<ModalResultProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<string>('0');

  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
    handleOptionSelect(id);
  };

  return (
    <div>
      <S.ModalSubmit>
        <S.ModalOption onClick={() => handleButtonClick('1')}>
          <I.submit isActive={selectedButtonId !== '1'} />
        </S.ModalOption>
        <S.ModalOption onClick={() => handleButtonClick('2')}>
          <I.notSubmit isActive={selectedButtonId !== '2'} />
        </S.ModalOption>
      </S.ModalSubmit>
    </div>
  );
};

export default ModalSubmit;
