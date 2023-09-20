import React, { useState } from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
import * as C from 'components';
import status from 'Api/status';
import useStore from 'Stores/StoreContainer';
import {
  CommonApplicationResponseType,
  EvaluationStatusType,
} from 'Types/application';
import { toast } from 'react-toastify';

interface ModalProps {
  studentCode: number;
  name: string;
  onClose: () => void;
  applicant: CommonApplicationResponseType;
}

const Modal: React.FC<ModalProps> = ({
  name,
  studentCode,
  onClose,
  applicant,
}) => {
  // 모달 상태 변수 초기화
  const [isClose, setIsClose] = useState<boolean>(true);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedButtonId, setSelectedButtonId] = useState<number>(0);
  const [showModalResult, setShowModalResult] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<number>(0);

  // 상태 업데이트를 위한 변수 초기화
  const [finalSubmitted, setFinalSubmitted] = useState<boolean>(false);
  const [printsArrived, setPrintsArrived] = useState<boolean>(false);
  const [firstEvaluation, setFirstEvaluation] =
    useState<EvaluationStatusType>('NOT_YET');
  const [secondEvaluation, setSecondEvaluation] =
    useState<EvaluationStatusType>('NOT_YET');
  const [screeningSubmittedAt, setScreeningSubmittedAt] =
    useState<string>('GENERAL');
  const [screeningFirstEvaluationAt, setScreeningFirstEvaluationAt] =
    useState<string>('GENERAL');
  const [screeningSecondEvaluationAt, setScreeningSecondEvaluationAt] =
    useState<string>('GENERAL');
  const [registrationNumber, setRegistrationNumber] = useState<boolean>(false);
  const [secondScore, setSecondScore] = useState<number | undefined>(undefined);
  const [finalMajor, setFinalMajor] = useState<string>('SW');

  // 선택한 옵션 닫기
  const handleOptionSelect = () => {
    setIsClose(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    onClose();
  };

  // Store에서 데이터 가져오기
  const { setApplyData } = useStore();

  // 버튼 클릭 처리
  const handleButtonClick = (id: number) => {
    setIsButtonClicked(true);
    setSelectedButtonId(id);
  };

  // 모달 내부 버튼 클릭 처리
  const handleModalButtonClick = (
    selectedButtonId: number,
    userId: number,
    buttonTitle: '다음' | '확인',
  ) => {
    setShowModal(selectedButtonId);
    setIsButtonClicked(false);
    setShowModalResult(true);

    setIsButtonClicked(true);

    switch (selectedButtonId) {
      case 1:
        setPrintsArrived(true);
        break;
      case 2:
        setFirstEvaluation('PASS');
        break;
      case 3:
        setSecondEvaluation('NOT_YET');
        break;
      case 4:
        setSecondScore(0);
        break;
      default:
        // 선택한 버튼 ID가 다른 경우에 대한 처리를 여기에 추가하세요.
        break;
    }

    if (buttonTitle === '확인') {
      modifiedStatus(userId);
      handleCloseModal();
      toast.success('상태 수정에 성공하였어요.');
    }
  };

  // 데이터 저장
  const applyData: CommonApplicationResponseType = {
    isFinalSubmitted: finalSubmitted,
    isPrintsArrived: printsArrived,
    firstEvaluation: firstEvaluation,
    secondEvaluation: secondEvaluation,
    screeningSubmittedAt: screeningSubmittedAt,
    screeningFirstEvaluationAt: screeningFirstEvaluationAt,
    screeningSecondEvaluationAt: screeningSecondEvaluationAt,
    registrationNumber: registrationNumber,
    secondScore: secondScore,
    finalMajor: finalMajor,
  };

  // 데이터를 서버로 전송
  const apply = async (submitData: CommonApplicationResponseType) => {
    try {
      setApplyData(applyData);
      // onNext(); // onNext 함수가 선언되지 않았으므로 필요한 경우 추가하세요.

      // setshowApplyPostModal(); // setshowApplyPostModal 함수가 선언되지 않았으므로 필요한 경우 추가하세요.
      toast.success('원서 정보 저장에 성공했어요.');
    } catch (error: any) {
      // setshowApplyPostModal(); // setshowApplyPostModal 함수가 선언되지 않았으므로 필요한 경우 추가하세요.
      toast.error('원서 정보 저장 중 에러가 발생했어요. 다시 시도해주세요.');
    }
  };

  // 최종 제출 상태 업데이트
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
