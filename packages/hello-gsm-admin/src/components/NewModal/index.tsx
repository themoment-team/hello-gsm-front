// NewModal.tsx
import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import ModalButton from './ModalButton';
import ModalResult from './ModalResult';
import ModalInput from './ModalInput';
import ModalStatus from './ModalStatus';

interface ModalProps {
  studentCode: string;
  name: string;
  modalType: 'submit' | 'status' | 'pass';
}

const NewModal: React.FC<ModalProps> = ({ name, studentCode, modalType }) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const handleIsClose = () => {
    setIsClose(prev => !prev);
  };

  const handleOptionSelect = () => {
    setIsOptionSelected(true);
  };

  const isStatus = modalType === 'status' ? true : false;

  const modalContent =
    modalType === 'status'
      ? { width: '848px', height: '441px' }
      : { width: '416px', height: '441px' };

  const modalDesc =
    modalType === 'status'
      ? '님의 어떤 상태를 수정하실건가요?'
      : modalType === 'pass'
      ? '님의 서류 제출 여부를 선택해주세요'
      : '님의 2차 점수(인적성)를 입력해주세요.';

  return (
    <div>
      {isClose && (
        <S.Modal isStatus={isStatus}>
          <S.ModalContent style={{ width: modalContent.width }}>
            <S.XIcon isStatus={isStatus} onClick={handleIsClose}>
              <I.XIcon />
            </S.XIcon>
            <S.TitleBox>
              <S.Title>수험번호 {studentCode}</S.Title>
              <S.Desc>
                {name}
                {modalDesc}
              </S.Desc>
            </S.TitleBox>
            {modalType === 'submit' ? (
              <div>
                <ModalResult handleOptionSelect={handleOptionSelect} />
              </div>
            ) : modalType === 'pass' ? (
              <div>
                <ModalInput />
              </div>
            ) : (
              <div>
                <ModalStatus handleOptionSelect={handleOptionSelect} />
              </div>
            )}
            <ModalButton isConfirm={!isOptionSelected} />
          </S.ModalContent>
        </S.Modal>
      )}
    </div>
  );
};

export default NewModal;
