import React, { useState } from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
import * as C from 'components';
import status from 'Api/status';
import useStore from 'Stores/StoreContainer';
import {
  CommonApplicationResponseType,
  EvaluationStatusType,
  ScreeningType,
} from 'Types/application';
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
  const [inputValue, setInputValue] = useState<number>(0);

  const [finalSubmitted, setFinalSubmitted] = useState<boolean>(false);
  const [printsArrived, setPrintsArrived] = useState<boolean>(false);
  useState<EvaluationStatusType>('NOT_YET');
  useState<EvaluationStatusType>('NOT_YET');

  const [screeningFirstEvaluationAt, setScreeningFirstEvaluationAt] =
    useState<ScreeningType>('GENERAL');
  const [screeningSecondEvaluationAt, setScreeningSecondEvaluationAt] =
    useState<ScreeningType>('GENERAL');
  const [secondScore, setSecondScore] = useState<number>(0);

  const handleOptionSelect = () => {
    setIsClose(true);
  };

  const handleCloseModal = () => {
    onClose();
  };

  const {
    setApplyData,
    firstEvaluation,
    secondEvaluation,
    registrationNumber,
    finalMajor,
    selectedOption,
    setSecondEvaluation,
    setFirstEvaluation,
  } = useStore();

  const handleButtonClick = (id: number) => {
    setIsButtonClicked(true);
    setSelectedButtonId(id);
  };

  const applyData: CommonApplicationResponseType = {
    isFinalSubmitted: finalSubmitted,
    isPrintsArrived: printsArrived,
    firstEvaluation: firstEvaluation,
    secondEvaluation: secondEvaluation,
    screeningFirstEvaluationAt: screeningFirstEvaluationAt,
    screeningSecondEvaluationAt: screeningSecondEvaluationAt,
    registrationNumber: registrationNumber,
    secondScore: secondScore,
    finalMajor: finalMajor,
  };

  const handleModalButtonClick = (
    selectedButtonId: number,
    userId: number,
    buttonTitle: '다음' | '확인',
  ) => {
    if (buttonTitle === '확인') {
      modifiedStatus(userId);
      handleCloseModal();
      toast.success('상태 수정에 성공하였어요.');
      apply(applyData);
    } else {
      setShowModal(selectedButtonId);
      setIsButtonClicked(false);
      setShowModalResult(true);

      setIsButtonClicked(true);

      switch (selectedButtonId) {
        case 1:
          selectedOption === 1
            ? setPrintsArrived(true)
            : setPrintsArrived(false);
          break;
        case 2:
          selectedOption === 1
            ? setFirstEvaluation('PASS')
            : setFirstEvaluation('FALL');
          break;
        case 3:
          selectedOption === 1
            ? setSecondEvaluation('PASS')
            : setSecondEvaluation('FALL');
          break;
        case 4:
          setSecondScore(inputValue);
          console.log(inputValue);
          break;
        default:
          break;
      }
    }
  };

  const apply = async (applyData: CommonApplicationResponseType) => {
    try {
      setApplyData(applyData);
    } catch (error: any) {
      toast.error('원서 정보 저장 중 에러가 발생했어요. 다시 시도해주세요.');
    }
  };

  const modifiedStatus = async (userId: number) => {
    try {
      await status.putStatus(userId);
      toast.success('상태 수정이 완료되었어요.');
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
              <C.ModalInput setInputValue={setInputValue} />
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
