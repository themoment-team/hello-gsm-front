import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';

const ModalStatus: React.FC = () => {
  const [selectedButtonId, setSelectedButtonId] = useState<string>('1');
  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
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
