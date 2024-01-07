import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import status from 'Api/status';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import {
  ApplicationListType,
  CommonApplicationResponseType,
} from 'type/application';

import * as C from 'components';

import * as S from './style';

interface ModalProps {
  data: ApplicationListType;
  onClose: () => void;
  getApplicationList: () => void;
}

// showModalOption : 첫번째 모달에서 상태를 바꿀 모달 선택
// selectedOption : 선택된 모달 내의 제출 미제출 혹은 합격 불합격 결정

const Modal = ({ data, onClose, getApplicationList }: ModalProps) => {
  const [isNextStep, setIsNextStep] = useState(false);
  const [buttonTitle] = useState<'다음' | '확인'>('다음');
  const [showModalOption, setShowModalOption] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(data.secondScore ?? 0);
  const [submittedApplyData, setSubmittedApplyData] =
    useState<CommonApplicationResponseType>({
      isFinalSubmitted: data.isFinalSubmitted,
      isPrintsArrived: data.isPrintsArrived,
      firstEvaluation: data.firstEvaluation,
      secondEvaluation: data.secondEvaluation,
      screeningFirstEvaluationAt: data.screeningFirstEvaluationAt,
      screeningSecondEvaluationAt: data.screeningSecondEvaluationAt,
      registrationNumber: data.registrationNumber,
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
        if (isNumber(inputValue)) {
          updatedData.secondScore = inputValue;
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
      <S.Modal>
        <S.XIcon>
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
          <S.ContentBox>
            <S.TitleBox>
              <S.Title>수험번호 {data.applicationId}</S.Title>
              <S.Desc>
                {data.applicantName}님의 어떤 상태를 수정하실건가요?
              </S.Desc>
            </S.TitleBox>
            <S.ButtonBox>
              <S.ModalOption onClick={() => setShowModalOption(1)}>
                <I.DocumentsSubmissionStatus isActive={showModalOption === 1} />
              </S.ModalOption>
              <S.ModalOption onClick={() => setShowModalOption(2)}>
                <I.SecondScoringEntry isActive={showModalOption === 2} />
              </S.ModalOption>
            </S.ButtonBox>
            <C.ModalButton
              buttonTitle={buttonTitle}
              showModalOption={showModalOption}
              onClick={() => setIsNextStep(true)}
              disabled={showModalOption === 0}
            />
          </S.ContentBox>
        )}

        {isNextStep && (
          <>
            {showModalOption === 1 && (
              <S.ContentBox>
                <S.TitleBox>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 서류 제출 여부를 선택해주세요
                  </S.Desc>
                </S.TitleBox>
                <C.ModalSubmit data={submittedApplyData} />
                <C.ModalButton
                  buttonTitle="확인"
                  onClick={() => handleSubmit()}
                  disabled={
                    data.isPrintsArrived === false && selectedOption === 0
                  }
                />
              </S.ContentBox>
            )}
            {showModalOption === 2 && (
              <S.ContentBox>
                <S.TitleBox>
                  <S.Title>수험번호 {data.applicationId}</S.Title>
                  <S.Desc>
                    {data.applicantName}님의 2차 점수(인적성)를 입력해주세요.
                  </S.Desc>
                </S.TitleBox>
                <C.ModalInput data={data} setInputValue={setInputValue} />
                <C.ModalButton
                  buttonTitle="확인"
                  onClick={() => handleSubmit()}
                  disabled={inputValue === 0}
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
