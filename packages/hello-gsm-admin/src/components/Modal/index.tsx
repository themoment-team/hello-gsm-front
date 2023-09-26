import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as I from 'Assets/svg';
import * as C from 'components';
import status from 'Api/status';
import useStore from 'Stores/StoreContainer';
import {
  ApplicationListType,
  CommonApplicationResponseType,
} from 'Types/application';
import { toast } from 'react-toastify';

interface ModalProps {
  data: ApplicationListType;
  onClose: () => void;
  getApplicationList: () => void;
}

const Modal = ({ data, onClose, getApplicationList }: ModalProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedButtonId, setSelectedButtonId] = useState<number>(0);
  const [isNextStep, setIsNextStep] = useState(false);

  const [inputValue, setInputValue] = useState<number>(0);
  const [submittedApplyData, setSubmittedApplyData] =
    useState<CommonApplicationResponseType>({
      isFinalSubmitted: data.isFinalSubmitted,
      isPrintsArrived: data.isPrintsArrived,
      firstEvaluation: data.firstEvaluation,
      secondEvaluation: data.secondEvaluation,
      screeningFirstEvaluationAt: data.screeningFirstEvaluationAt,
      screeningSecondEvaluationAt: data.screeningSecondEvaluationAt,
      registrationNumber: data.applicationId,
      secondScore: data.secondScore,
      finalMajor: data.finalMajor,
    });

  const handleCloseModal = () => {
    onClose();
  };

  const { selectedOption } = useStore();

  const handleButtonClick = (id: number) => {
    setIsButtonClicked(true);
    setSelectedButtonId(id);
  };

  const handleModalButtonClick = (
    selectedButtonId: number,
    buttonTitle: '다음' | '확인',
  ) => {
    const isNumber = (value: number) => {
      return !isNaN(Number(value));
    };
    if (buttonTitle === '확인') {
      switch (selectedButtonId) {
        case 1:
          if (selectedOption === 1) {
            setSubmittedApplyData({
              ...submittedApplyData,
              isPrintsArrived: true,
            });
          } else {
            setSubmittedApplyData({
              ...submittedApplyData,
              isPrintsArrived: false,
            });
          }
          break;
        case 2:
          if (selectedOption === 1) {
            setSubmittedApplyData({
              ...submittedApplyData,
              firstEvaluation: 'PASS',
            });
          } else {
            setSubmittedApplyData({
              ...submittedApplyData,
              firstEvaluation: 'FALL',
            });
          }
          break;
        case 3:
          if (selectedOption === 1) {
            setSubmittedApplyData({
              ...submittedApplyData,
              secondEvaluation: 'PASS',
            });
          } else {
            setSubmittedApplyData({
              ...submittedApplyData,
              secondEvaluation: 'FALL',
            });
          }
          break;
        case 4:
          if (isNumber(inputValue)) {
            setSubmittedApplyData({
              ...submittedApplyData,
              secondScore: inputValue,
            });

            console.log(inputValue);
          } else {
            toast.error('입력하신 값이 숫자가 아닙니다.');
          }
          break;
      }
    } else {
      setIsButtonClicked(false);
      setIsNextStep(true);
    }
  };

  useEffect(() => {
    const updateList = async () => {
      if (selectedButtonId) {
        try {
          await status.putStatus(submittedApplyData, data.applicationId);
          toast.success('상태 수정이 완료되었어요.');
          handleCloseModal();
          getApplicationList();
          setSelectedButtonId(0);
          setIsNextStep(false);
        } catch (error: any) {
          toast.error(
            '상태 수정 저장 중 에러가 발생했어요. 다시 시도해주세요.',
          );
          console.error(error);
        }
      }
    };

    updateList();
  }, [submittedApplyData]);

  return (
    <>
      <S.Modal
        style={{
          width: isNextStep && selectedButtonId !== 0 ? '28.5rem' : '55.5rem',
        }}
      >
        <S.XIcon
          style={{
            width: isNextStep && selectedButtonId !== 0 ? '28.5rem' : '55.5rem',
          }}
        >
          <div
            style={{
              width: '1.5rem',
              height: '1.5rem',
              cursor: 'pointer',
            }}
            onClick={handleCloseModal}
          >
            <I.ModalCloseIcon />
          </div>
        </S.XIcon>
        {!isNextStep && (
          <>
            <S.TitleBox>
              <S.Title>수험번호 {data.applicationId}</S.Title>
              <S.Desc>
                {data.applicantName}님의 어떤 상태를 수정하실건가요?
              </S.Desc>
            </S.TitleBox>
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
                onClick={() => handleModalButtonClick(selectedButtonId, '다음')}
              />
            </S.ContentBox>
          </>
        )}

        {isNextStep && (
          <>
            {selectedButtonId === 1 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 서류 제출 여부를 선택해주세요
                  </S.Desc>
                </S.TitleBox>
                <C.ModalSubmit data={data} />
                <C.ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() =>
                    handleModalButtonClick(selectedButtonId, '확인')
                  }
                />
              </S.ContentBox>
            )}
            {selectedButtonId === 2 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 1차 합격 여부(서류)를 선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalResult
                  data={data}
                  selectedButtonId={selectedButtonId}
                />
                <C.ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() =>
                    handleModalButtonClick(selectedButtonId, '확인')
                  }
                />
              </S.ContentBox>
            )}
            {selectedButtonId === 3 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 2차 합격 여부(인적성)를
                    선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalResult
                  data={data}
                  selectedButtonId={selectedButtonId}
                />
                <C.ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() =>
                    handleModalButtonClick(selectedButtonId, '확인')
                  }
                />
              </S.ContentBox>
            )}
            {selectedButtonId === 4 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 2차 점수(인적성)를 입력해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalInput data={data} setInputValue={setInputValue} />
                <C.ModalButton
                  buttonTitle="확인"
                  isConfirm={!isButtonClicked}
                  onClick={() =>
                    handleModalButtonClick(selectedButtonId, '확인')
                  }
                />
              </S.ContentBox>
            )}
          </>
        )}
      </S.Modal>
    </>
  );
};

export default Modal;
