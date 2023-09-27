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

// showModalOption : 첫번째 모달에서 상태를 바꿀 모달 선택
// selectedOption : 선택된 모달 내의 제출 미제출 혹은 합격 불합격 결정

const Modal = ({ data, onClose, getApplicationList }: ModalProps) => {
  const [isNextStep, setIsNextStep] = useState(false);
  const [buttonTitle, setButtonTitle] = useState<'다음' | '확인'>('다음');
  const [showModalOption, setShowModalOption] = useState<number>(0);
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
    setShowModalOption(0);
    onClose();
  };

  const { selectedOption, setSelectedOption } = useStore();

  const handleSubmit = () => {
    const isNumber = (value: number) => {
      return !isNaN(Number(value));
    };
    const updatedData = { ...submittedApplyData };

    switch (showModalOption) {
      case 1:
        updatedData.isPrintsArrived = selectedOption === 1 ? true : false;
        break;
      case 2:
        updatedData.firstEvaluation = selectedOption === 1 ? 'PASS' : 'FALL';
        break;
      case 3:
        updatedData.secondEvaluation = selectedOption === 1 ? 'PASS' : 'FALL';
        break;
      case 4:
        if (isNumber(inputValue)) {
          updatedData.secondScore = inputValue;
          console.log(inputValue);
        } else {
          toast.error('입력하신 값이 숫자가 아닙니다.');
          return;
        }
        break;
    }
    setSubmittedApplyData(updatedData);
  };

  useEffect(() => {
    const updateList = async () => {
      if (showModalOption) {
        try {
          await status.putStatus(submittedApplyData, data.applicationId);
          toast.success('상태 수정이 완료되었어요.');
          setSelectedOption(0);
          handleCloseModal();
          getApplicationList();
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
          width: isNextStep && showModalOption !== 0 ? '28.5rem' : '55.5rem',
        }}
      >
        <S.XIcon
          style={{
            width: isNextStep && showModalOption !== 0 ? '28.5rem' : '55.5rem',
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
                <S.ModalOption onClick={() => setShowModalOption(1)}>
                  <I.DocumentsSubmissionStatus
                    isActive={showModalOption === 1}
                  />
                </S.ModalOption>
                <S.ModalOption onClick={() => setShowModalOption(2)}>
                  <I.FirstPassStatus isActive={showModalOption === 2} />
                </S.ModalOption>
                <S.ModalOption onClick={() => setShowModalOption(3)}>
                  <I.SecondScoringStatus isActive={showModalOption === 3} />
                </S.ModalOption>
                <S.ModalOption onClick={() => setShowModalOption(4)}>
                  <I.SecondScoringEntry isActive={showModalOption === 4} />
                </S.ModalOption>
              </S.ButtonBox>
              <C.ModalButton
                buttonTitle={buttonTitle}
                showModalOption={showModalOption}
                onClick={() => setIsNextStep(true)}
              />
            </S.ContentBox>
          </>
        )}

        {isNextStep && (
          <>
            {showModalOption === 1 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 서류 제출 여부를 선택해주세요
                  </S.Desc>
                </S.TitleBox>
                <C.ModalSubmit data={submittedApplyData} />
                <C.ModalButton
                  buttonTitle="확인"
                  onClick={() => handleSubmit()}
                />
              </S.ContentBox>
            )}
            {showModalOption === 2 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 1차 합격 여부(서류)를 선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalFirstEvaluationSubmit data={submittedApplyData} />
                <C.ModalButton
                  buttonTitle="확인"
                  onClick={() => handleSubmit()}
                />
              </S.ContentBox>
            )}
            {showModalOption === 3 && (
              <S.ContentBox>
                <S.TitleBox style={{ width: '26rem' }}>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 2차 합격 여부(인적성)를
                    선택해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalSecondEvaluationSubmit data={submittedApplyData} />
                <C.ModalButton
                  buttonTitle="확인"
                  onClick={() => handleSubmit()}
                />
              </S.ContentBox>
            )}
            {showModalOption === 4 && (
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
                  onClick={() => handleSubmit()}
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
