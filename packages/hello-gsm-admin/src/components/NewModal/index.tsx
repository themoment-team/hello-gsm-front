import React, { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import ModalButton from './ModalButton';
import ModalResult from './ModalResult';
import ModalInput from './ModalInput';
import ModalSubmit from './ModalSubmit';

interface ModalProps {
  studentCode: string;
  name: string;
}

const NewModal: React.FC<ModalProps> = ({ name, studentCode }) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedButtonId, setSelectedButtonId] = useState<string>('0');
  const [showModalResult, setShowModalResult] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<string>('0');

  const handleIsClose = () => setIsClose(prev => !prev);
  const handleOptionSelect = () => {
    setIsClose(true);
  };

  const handleButtonClick = (id: string) => {
    setIsButtonClicked(true);
    setSelectedButtonId(id);
  };

  const handleModalButtonClick = (selectedButtonId: string) => {
    setShowModal(selectedButtonId);
    setIsButtonClicked(false);
    setShowModalResult(true);
    setIsButtonClicked(true);
  };

  return (
    <div>
      {isClose && (
        <S.Modal
          style={{
            width: showModal !== '0' ? '28.5rem' : '55.5rem',
          }}
        >
          <S.ModalContent>
            <S.XIcon
              onClick={handleIsClose}
              style={{
                width: showModal !== '0' ? '28.5rem' : '55.5rem',
              }}
            >
              <I.ModalCloseIcon />
            </S.XIcon>
            {showModalResult ? (
              <></>
            ) : (
              <S.TitleBox>
                <S.Title>수험번호 {studentCode}</S.Title>
                <S.Desc>{name}님의 어떤 상태를 수정하실건가요?</S.Desc>
              </S.TitleBox>
            )}
            {showModal === '1' && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '416px' }}>
                  <S.Title>수험번호 {studentCode}</S.Title>
                  <S.Desc>{name}님의 서류 제출 여부를 선택해주세요</S.Desc>
                </S.TitleBox>
                <ModalSubmit handleOptionSelect={handleOptionSelect} />
                <ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() => handleModalButtonClick(selectedButtonId)}
                />
              </S.ContentBox>
            )}
            {showModal === '2' && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '416px' }}>
                  <S.Title>수험번호 {studentCode}</S.Title>
                  <S.Desc>
                    {name}님의 1차 합격 여부(서류)를 선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <ModalResult handleOptionSelect={handleOptionSelect} />
                <ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() => handleModalButtonClick(selectedButtonId)}
                />
              </S.ContentBox>
            )}
            {showModal === '3' && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {studentCode}</S.Title>
                  <S.Desc>
                    {name}님의 2차 합격 여부(인적성)를 선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <ModalResult handleOptionSelect={handleOptionSelect} />
                <ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() => handleModalButtonClick(selectedButtonId)}
                />
              </S.ContentBox>
            )}
            {showModal === '4' && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {studentCode}</S.Title>
                  <S.Desc>{name}님의 2차 점수(인적성)를 입력해주세요.</S.Desc>
                </S.TitleBox>
                <ModalInput />
                <ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() => handleModalButtonClick(selectedButtonId)}
                />
              </S.ContentBox>
            )}
            {showModalResult ? (
              <></>
            ) : (
              <S.ContentBox>
                <S.ButtonBox>
                  <S.ModalOption onClick={() => handleButtonClick('1')}>
                    <I.DocumentsSubmissionStatus
                      isActive={selectedButtonId === '1'}
                    />
                  </S.ModalOption>
                  <S.ModalOption onClick={() => handleButtonClick('2')}>
                    <I.FirstPassStatus isActive={selectedButtonId === '2'} />
                  </S.ModalOption>
                  <S.ModalOption onClick={() => handleButtonClick('3')}>
                    <I.SecondScoringStatus
                      isActive={selectedButtonId === '3'}
                    />
                  </S.ModalOption>
                  <S.ModalOption onClick={() => handleButtonClick('4')}>
                    <I.SecondScoringEntry isActive={selectedButtonId === '4'} />
                  </S.ModalOption>
                </S.ButtonBox>
                <ModalButton
                  buttonTitle="다음"
                  isConfirm={!isButtonClicked}
                  onClick={() => handleModalButtonClick(selectedButtonId)}
                />
              </S.ContentBox>
            )}
          </S.ModalContent>
        </S.Modal>
      )}
    </div>
  );
};

export default NewModal;
