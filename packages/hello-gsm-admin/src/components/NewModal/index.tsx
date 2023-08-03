import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import Image from 'next/image';
import ModalButton from './ModalButton';
import ModalContent from './ModalContents';

interface ModalProps {
  StudentCode: string;
  name: string;
  modalType: 'submit' | 'status' | 'pass';
}

const NewModal: React.FC<ModalProps> = ({ name, StudentCode, modalType }) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const isStatus =
    modalType === 'status'
      ? { width: '888px', height: '513px' }
      : { width: '416px', height: '441px' };
  const handleIsClose = () => {
    setIsClose(prev => !prev);
  };

  return (
    <div>
      {isClose && (
        <S.Modal>
          <S.XIcon onClick={handleIsClose} style={{ width: isStatus.width }}>
            <I.XIcon />
          </S.XIcon>
          <ModalContent
            modalType="pass"
            title="수험번호 000"
            desc="변찬우님의 서류 제출 여부를 선택해주세요"
          />
        </S.Modal>
      )}
    </div>
  );
};

export default NewModal;
