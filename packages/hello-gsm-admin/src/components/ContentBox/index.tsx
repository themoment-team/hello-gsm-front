import { css } from '@emotion/react';
import application from 'Api/application';
import auth from 'Api/auth';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  isDuringFinalResult,
  isStartFinalResult,
  isStartFirstResult,
} from 'shared/acceptable';
import useStore from 'Stores/StoreContainer';
import {
  ApplicantType,
  SearchApplicationInfoType,
  ApplicationListType,
  EvaluationStatusType,
} from 'Types/application';
import * as S from './style';
import * as I from 'Assets/svg';
import formatScreening from 'Utils/Libs/formatScreening';

import { Modal } from 'components';

interface ContentBoxProp {
  content: ApplicationListType;
}

type resultObjectType = {
  [key in EvaluationStatusType]: string;
};

const ContentBox: React.FC<ContentBoxProp> = ({
  content: {
    applicationId,
    applicantName,
    applicantPhoneNumber,
    teacherPhoneNumber,
    guardianPhoneNumber,
    screening,
    isFinalSubmitted,
    isPrintsArrived,
    firstEvaluation,
    secondEvaluation,
    schoolName,
    secondScore,
  },
}) => {
  const [isFirstResult, setIsFirstResult] = useState<boolean>(false);
  const [isFinalResult, setIsFinalResult] = useState<boolean>(false);
  const firstResult: EvaluationStatusType = firstEvaluation;
  const finalResult: EvaluationStatusType = secondEvaluation;
  const [score, setScore] = useState<number | null>(secondScore || null);
  const [documentReception, setDocumentReception] = useState<boolean>(true);
  const {
    showScoreModal,
    setShowScoreModal,
    setModalName,
    setShowStatusModal,
    modalRegistrationNumber,
    setModalRegistrationNumber,
    scoreModalValue,
    showStatusModal,
    setScoreModalValue,
  } = useStore();

  useEffect(() => {
    // 1차 시험 결과를 조화할 수 있는 날짜
    setIsFirstResult(isStartFirstResult);
    // 2차 시험 결과를 조회할 수 있는 날짜
    setIsFinalResult(isStartFinalResult);
  }, []);

  const resultStyle = {
    NOT_YET: css`
      color: #9e9e9e;
      cursor: default;
    `,
    PASS: css`
      color: #2174d8;
      cursor: default;
    `,
    FALL: css`
      color: #ff000f;
      cursor: default;
    `,
  };

  const formatResult = (result: EvaluationStatusType) => {
    const resultObject: resultObjectType = {
      PASS: '합격',
      FALL: '불합격',
      NOT_YET: '미정',
    };
    return resultObject[result];
  };

  return (
    <S.ContentBox>
      {showStatusModal && (
        <S.ModalContainer>
          <Modal name={applicantName} studentCode={applicationId} />
        </S.ModalContainer>
      )}
      <S.Content>
        <S.RegistrationNumber>
          {String(applicationId).padStart(4, '0')}
        </S.RegistrationNumber>
        <S.isDocumentReception>
          <S.DocumentReceptionText documentReception={documentReception}>
            · {isPrintsArrived ? '제출' : '미제출'}
          </S.DocumentReceptionText>
        </S.isDocumentReception>
        <S.Name>{applicantName}</S.Name>
        <S.Screening>{formatScreening(screening)}</S.Screening>
        <S.SchoolName>{schoolName ?? '검정고시'}</S.SchoolName>
        <S.PhoneNumber>{applicantPhoneNumber}</S.PhoneNumber>
        <S.GuardianNumber>{guardianPhoneNumber}</S.GuardianNumber>
        <S.TeacherNumber>{teacherPhoneNumber}</S.TeacherNumber>
        <S.FirstResultText css={isFinalResult && resultStyle[firstResult]}>
          {isFirstResult && formatResult(firstResult)}
        </S.FirstResultText>
        <S.FinalScoreText
          css={css`
            color: ${score ? '#212121' : '#9E9E9E'};
          `}
        >
          {score ?? '미입력'}
        </S.FinalScoreText>
        <S.FinalResultText css={isFinalResult && resultStyle[finalResult]}>
          {isFinalResult && formatResult(finalResult)}
        </S.FinalResultText>
      </S.Content>
      <S.EditButtonBox>
        <S.EditButton onClick={setShowStatusModal}>
          <I.BulbIcon />
          상태 수정
        </S.EditButton>
        <S.EditButton>
          <I.EditIcon />
          원서 수정
        </S.EditButton>
      </S.EditButtonBox>
    </S.ContentBox>
  );
};

export default ContentBox;
