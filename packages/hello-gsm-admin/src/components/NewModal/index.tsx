import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';
import ModalButton from './ModalButton';

interface ModalProps {
  StudentCode: string;
  name: string;
}

const NewModal: React.FC<ModalProps> = ({ name, StudentCode }) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const [selectedButtonId, setSelectedButtonId] = useState<string>('1');

  const handleIsClose = () => {
    setIsClose(prev => !prev);
  };

  const handleButtonClick = (id: string) => {
    setSelectedButtonId(id);
  };

  return (
    <div>
      {isClose && (
        <S.Modal>
          <S.XIcon onClick={handleIsClose}>
            <I.XIcon />
          </S.XIcon>
          <S.TitleBox>
            <S.Title>수험번호 000</S.Title>
            <S.Desc>이정우님의 어떤 상태를 수정하실건가요?</S.Desc>
          </S.TitleBox>
          <S.ButtonBox>
            <S.ModalOption onClick={() => handleButtonClick('1')}>
              <I.DocumentsSubmissionStatus
                isActive={selectedButtonId !== '1'}
              />
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
          <ModalButton isConfirm={true} />
        </S.Modal>
      )}
    </div>
  );
};

export default NewModal;
