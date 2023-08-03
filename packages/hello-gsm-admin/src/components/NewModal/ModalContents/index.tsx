import React, { useState } from 'react';
import ModalButton from '../ModalButton';
import ModalStatus from '../ModalStatus';
import ModalInput from '../ModalInput';
import * as S from './style';

interface ModalContentProps {
  modalType: 'submit' | 'pass' | 'status';
  title: string;
  desc: string;
}

const ModalContent: React.FC<ModalContentProps> = ({
  modalType,
  title,
  desc,
}) => {
  return (
    <div>
      <S.TitleBox>
        <S.Title>{title}</S.Title>
        <S.Desc>{desc}</S.Desc>
      </S.TitleBox>
      {modalType === 'submit' ? (
        <div>submit</div>
      ) : modalType === 'pass' ? (
        <div>
          <ModalInput />
        </div>
      ) : (
        <div>
          <ModalStatus />
          <ModalButton isConfirm={false} />
        </div>
      )}
    </div>
  );
};

export default ModalContent;
