import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';
import ModalButton from './ModalButton';

const NewModal: React.FC = () => {
  return (
    <S.Modal>
      <I.XIcon />
      <Image
        src="/modalOptions/DocumentsSubmissionStatus.png"
        alt="아이콘"
        width={200}
        height={200}
      />
      <ModalButton />
    </S.Modal>
  );
};

export default NewModal;
