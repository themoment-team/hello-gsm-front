// ModalResult.tsx
import React, { useState } from 'react';
import * as I from 'assets/svg';
import * as S from './style';

interface ModalResultProps {
  handleOptionSelect: () => void;
}

const ModalResult: React.FC<ModalResultProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<string>('0');

  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
    handleOptionSelect(); // Call the handler from NewModal when an option is selected
  };

  return (
    <S.ModalResult>
      <S.ModalOption onClick={() => handleButtonClick('1')}>
        <I.Pass isActive={selectedButtonId !== '1'} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick('2')}>
        <I.Fail isActive={selectedButtonId !== '2'} />
      </S.ModalOption>
    </S.ModalResult>
  );
};

export default ModalResult;
