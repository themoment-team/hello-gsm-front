import React, { useState } from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
import * as C from 'components';
import status from 'Api/status';

import { toast } from 'react-toastify';

interface ModalProps {
  studentCode: number;
  name: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ name, studentCode, onClose }) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedButtonId, setSelectedButtonId] = useState<number>(0);
  const [showModalResult, setShowModalResult] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<number>(0);

  const handleOptionSelect = () => {
    setIsClose(true);
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleButtonClick = (id: number) => {
    setIsButtonClicked(true);
    setSelectedButtonId(id);
  };

  const handleModalButtonClick = (
    selectedButtonId: number,
    userId: number,
    buttonTitle: '다음' | '확인',
  ) => {
    setShowModal(selectedButtonId);
    setIsButtonClicked(false);
    setShowModalResult(true);

    setIsButtonClicked(true);

    if (buttonTitle === '확인') {
      modifiedStatus(userId);
      handleCloseModal();
      toast.success('상태수정에 성공하였어요.');
    }
  };

  // 최종 제출
  const modifiedStatus = async (userId: number) => {
    try {
      await status.putStatus(userId);
      toast.success('상태수정이 완료되었어요.');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      {isClose && (
        <S.Modal
          style={{
            width: showModal !== 0 ? '28.5rem' : '55.5rem',
          }}
        >
          <S.XIcon
            style={{
              width: showModal !== 0 ? '28.5rem' : '55.5rem',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
            >
              <I.ModalCloseIcon />
            </div>
          </S.XIcon>
          {showModalResult ? (
            <></>
          ) : (
            <S.TitleBox>
              <S.Title>수험번호 {studentCode}</S.Title>
              <S.Desc>{name}님의 어떤 상태를 수정하실건가요?</S.Desc>
            </S.TitleBox>
          )}
          {showModal === 1 && (
            <S.ContentBox>
              <S.TitleBox style={{ width: '416px' }}>
                <S.Title>수험번호 {studentCode}</S.Title>
                <S.Desc>{name}님의 서류 제출 여부를 선택해주세요</S.Desc>
              </S.TitleBox>
              <C.ModalSubmit handleOptionSelect={handleOptionSelect} />
              <C.ModalButton
                buttonTitle="확인"
                isConfirm={!isButtonClicked}
                onClick={() =>
                  handleModalButtonClick(selectedButtonId, studentCode, '확인')
                }
              />
            </S.ContentBox>
          )}
          {showModal === 2 && (
            <S.ContentBox>
              <S.TitleBox style={{ width: '416px' }}>
                <S.Title>수험번호 {studentCode}</S.Title>
                <S.Desc>{name}님의 1차 합격 여부(서류)를 선택해주세요.</S.Desc>
              </S.TitleBox>
              <C.ModalResult handleOptionSelect={handleOptionSelect} />
              <C.ModalButton
                buttonTitle="확인"
                isConfirm={!isButtonClicked}
                onClick={() =>
                  handleModalButtonClick(selectedButtonId, studentCode, '확인')
                }
              />
            </S.ContentBox>
          )}
          {showModal === 3 && (
            <S.ContentBox>
              <S.TitleBox style={{ width: '26rem' }}>
                <S.Title>수험번호 {studentCode}</S.Title>
                <S.Desc>
                  {name}님의 2차 합격 여부(인적성)를 선택해주세요.
                </S.Desc>
              </S.TitleBox>
              <C.ModalResult handleOptionSelect={handleOptionSelect} />
              <C.ModalButton
                buttonTitle="확인"
                isConfirm={!isButtonClicked}
                onClick={() =>
                  handleModalButtonClick(selectedButtonId, studentCode, '확인')
                }
              />
            </S.ContentBox>
          )}
          {showModal === 4 && (
            <S.ContentBox>
              <S.TitleBox style={{ width: '26rem' }}>
                <S.Title>수험번호 {studentCode}</S.Title>
                <S.Desc>{name}님의 2차 점수(인적성)를 입력해주세요.</S.Desc>
              </S.TitleBox>
              <C.ModalInput />
              <C.ModalButton
                buttonTitle="확인"
                isConfirm={!isButtonClicked}
                onClick={() =>
                  handleModalButtonClick(selectedButtonId, studentCode, '확인')
                }
              />
            </S.ContentBox>
          )}
          {showModalResult ? (
            <></>
          ) : (
            <S.ContentBox>
              <S.ButtonBox>
                <S.ModalOption onClick={() => handleButtonClick(1)}>
                  <I.DocumentsSubmissionStatus
                    isActive={selectedButtonId === 1}
                  />
                </S.ModalOption>
                <S.ModalOption onClick={() => handleButtonClick(2)}>
                  <I.FirstPassStatus isActive={selectedButtonId === 2} />
                </S.ModalOption>
                <S.ModalOption onClick={() => handleButtonClick(3)}>
                  <I.SecondScoringStatus isActive={selectedButtonId === 3} />
                </S.ModalOption>
                <S.ModalOption onClick={() => handleButtonClick(4)}>
                  <I.SecondScoringEntry isActive={selectedButtonId === 4} />
                </S.ModalOption>
              </S.ButtonBox>
              <C.ModalButton
                buttonTitle="다음"
                isConfirm={!isButtonClicked}
                onClick={() =>
                  handleModalButtonClick(selectedButtonId, studentCode, '다음')
                }
              />
            </S.ContentBox>
          )}
        </S.Modal>
      )}
    </>
  );
};

export default Modal;
