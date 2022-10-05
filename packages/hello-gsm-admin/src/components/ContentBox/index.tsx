import { css } from '@emotion/react';
import application from 'Api/application';
import auth from 'Api/auth';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useStore from 'Stores/StoreContainer';
import { ApplicantType } from 'Types/application';
import * as S from './style';

interface ContentType {
  content: ApplicantType;
}

const ContentBox: React.FC<ContentType> = ({
  content: {
    name,
    cellphoneNumber,
    application: {
      applicationIdx,
      finalResultScreening,
      firstResultScreening,
      guardianCellphoneNumber,
      isDocumentReception,
      registrationNumber,
      schoolName,
      screening,
      teacherCellphoneNumber,
      application_score,
    },
  },
}) => {
  const isFirstResult: boolean =
    new Date() > new Date('2022-10-22 00:00:00') &&
    new Date() < new Date('2022-11-02 00:00:00');
  const isFinalResult: boolean = new Date() > new Date('2022-11-02 00:00:00');
  const firstResult: '미정' | '합격' | '불합격' = !isFirstResult
    ? '미정'
    : firstResultScreening
    ? '합격'
    : '불합격';
  const finalResult: '합격' | '불합격' = finalResultScreening
    ? '합격'
    : '불합격';
  const [score, setScore] = useState<number | null>(
    parseFloat(application_score?.personalityEvaluationScore ?? '') || null,
  );
  const [documentreception, setDocumentreception] =
    useState<boolean>(isDocumentReception);
  const {
    showScoreModal,
    setShowScoreModal,
    setModalName,
    modalRegistrationNumber,
    setModalRegistrationNumber,
    scoreModalValue,
    setScoreModalValue,
  } = useStore();

  useEffect(() => {
    if (!showScoreModal) {
      if (modalRegistrationNumber === registrationNumber) {
        setScore(scoreModalValue);
      }
    }
  }, [showScoreModal]);

  const documentSubmission = async () => {
    if (new Date() > new Date('2022-10-21 20:00:00')) {
      return toast.error('서류제출 여부 할당 기간이 아닙니다.');
    }
    const data = {
      registrationNumber: registrationNumber,
    };
    try {
      await application.document(data);
      setDocumentreception(documentreception => !documentreception);
    } catch (error: any) {
      // accessToken 없을 시에 accessToken 발급 후 서류 제출 여부 요청
      if (error.response.status === 401) {
        try {
          // accessToken 발급
          await auth.refresh();
          documentSubmission();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const resultStyle = (result: '미정' | '합격' | '불합격') => {
    switch (result) {
      case '미정':
        return css`
          background: #625e6f;
          color: rgba(31, 31, 31, 0.86);
          cursor: default;
        `;
      case '합격':
        return css`
          background: #19baff;
          color: #ffffff;
          cursor: default;
        `;
      case '불합격':
        return css`
          background: #ff4747;
          color: #ffffff;
          cursor: default;
        `;
    }
  };

  const scoreButtonClick = () => {
    if (
      new Date() < new Date('2022-10-28 16:00:00') ||
      new Date() > new Date('2022-11-01 22:10:00')
    ) {
      return toast.error('2차 성적 입력 기간이 아닙니다.');
    }
    if (firstResult === '불합격') {
      return toast.error('불합격자는 2차 성적 입력이 불가능합니다.');
    }
    setModalRegistrationNumber(registrationNumber);
    setModalName(name);
    setShowScoreModal();
    setScoreModalValue(score ?? 0);
  };

  return (
    <S.ContentBox>
      <S.Content>
        <S.RegistrationNumber>{applicationIdx}</S.RegistrationNumber>
        <S.Name>{name}</S.Name>
        <S.Screening>{screening}</S.Screening>
        <S.SchoolName>
          {schoolName !== 'null' ? schoolName : '검정고시'}
        </S.SchoolName>
        <S.isDocumentReception>
          <S.Checkbox
            css={css`
              background: ${documentreception && '#19BAFF'};
            `}
            onClick={documentSubmission}
          />
        </S.isDocumentReception>
        <S.PhoneNumber>{cellphoneNumber}</S.PhoneNumber>
        <S.GuardianNumber>{guardianCellphoneNumber}</S.GuardianNumber>
        <S.TeacherNumber>
          {teacherCellphoneNumber !== 'null'
            ? teacherCellphoneNumber
            : '검정고시'}
        </S.TeacherNumber>
      </S.Content>
      <S.Button css={() => resultStyle(firstResult)}>{firstResult}</S.Button>
      {isFinalResult ? (
        <S.Button css={() => resultStyle(finalResult)}>{finalResult}</S.Button>
      ) : (
        <S.Button onClick={scoreButtonClick}>{score ?? '입력'}</S.Button>
      )}
    </S.ContentBox>
  );
};

export default ContentBox;
