import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';
import ModalButton from './ModalButton';

interface ModalProps {
  Title: string;
  Desc: string;
}

const NewModal: React.FC<ModalProps> = ({ Title, Desc }) => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsClose(prev => !prev);
    alert('클릭');
  };
  return (
    <S.Modal>
      <S.XIcon>
        <I.XIcon />
      </S.XIcon>
      <S.TitleBox>
        <S.Title>수험번호 000</S.Title>
        <S.Desc>이정우님의 어떤 상태를 수정하실건가요?</S.Desc>
      </S.TitleBox>
      <S.ImgBox>
        <div onClick={handleOnClick}>
          <I.DocumentsSubmissionStatus />
        </div>
        <I.firstPassStatus />
        <I.secondScoringStatus />
        <I.secondScoringEntry />
      </S.ImgBox>
      <ModalButton isConfirm={true} />
    </S.Modal>
  );
};

export default NewModal;
