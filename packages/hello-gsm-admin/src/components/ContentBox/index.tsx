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
  const isResult: boolean = new Date() < new Date('2022-11-01') ? true : false;
  const [score, setScore] = useState<number | null>(
    parseFloat(application_score?.personalityEvaluationScore ?? '') || null,
  );
  const firstResult: '미정' | '합격' | '불합격' = !isResult
    ? '미정'
    : firstResultScreening !== null
    ? '합격'
    : '불합격';
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
      toast.error('서류제출 기간이 아닙니다.');
      return;
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

  const firstResultStyle = () => {
    switch (firstResult) {
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
      <S.Button css={firstResultStyle}>{firstResult}</S.Button>
      <S.Button onClick={scoreButtonClick}>{score ?? '입력'}</S.Button>
    </S.ContentBox>
  );
};

export default ContentBox;
