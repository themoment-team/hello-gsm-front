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
    modalRegistrationNumber,
    setModalRegistrationNumber,
    scoreModalValue,
    setScoreModalValue,
  } = useStore();

  const formattedCellphoneNumber = applicantPhoneNumber.replace(
    /(\d{3})(\d{4})(\d{4})/,
    '$1-$2-$3',
  );
  const formattedGuardianCellphoneNumber = guardianPhoneNumber.replace(
    /(\d{3})(\d{4})(\d{4})/,
    '$1-$2-$3',
  );
  const formattedTeacherCellphoneNumber =
    teacherPhoneNumber !== null
      ? teacherPhoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      : '검정고시';

  useEffect(() => {
    // 1차 시험 결과를 조화할 수 있는 날짜
    setIsFirstResult(isStartFirstResult);
    // 2차 시험 결과를 조회할 수 있는 날짜
    setIsFinalResult(isStartFinalResult);
  }, []);

  console.log(firstEvaluation);
  console.log(secondEvaluation);
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
        <S.PhoneNumber>{formattedCellphoneNumber}</S.PhoneNumber>
        <S.GuardianNumber>{formattedGuardianCellphoneNumber}</S.GuardianNumber>
        <S.TeacherNumber>{formattedTeacherCellphoneNumber}</S.TeacherNumber>
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
        <S.EditButton>
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
