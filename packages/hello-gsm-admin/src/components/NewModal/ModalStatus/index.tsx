import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';

interface ModalStatusProps {
  handleOptionSelect: () => void;
}

const ModalStatus: React.FC<ModalStatusProps> = ({ handleOptionSelect }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<string>('0');
  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
    handleOptionSelect();
  };

  return (
    <S.ButtonBox>
      <S.ModalOption onClick={() => handleButtonClick('1')}>
        <I.DocumentsSubmissionStatus isActive={selectedButtonId !== '1'} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick('2')}>
        <I.firstPassStatus isActive={selectedButtonId !== '2'} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick('3')}>
        <I.secondScoringStatus isActive={selectedButtonId !== '3'} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick('4')}>
        <I.secondScoringEntry isActive={selectedButtonId !== '4'} />
      </S.ModalOption>
    </S.ButtonBox>
  );
};
export default ModalStatus;
