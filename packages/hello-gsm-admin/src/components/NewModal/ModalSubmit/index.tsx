import React, { useState } from 'react';
import * as I from 'assets/svg';
import * as S from './style';
import ModalButton from '../ModalButton';

interface ModalResultProps {
  handleOptionSelect: (optionId: string) => void;
}

const ModalSubmit: React.FC<ModalResultProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<string>('1');
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
    setIsButtonClicked(true);
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
