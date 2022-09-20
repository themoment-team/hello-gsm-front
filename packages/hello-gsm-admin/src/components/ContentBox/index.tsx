import { css } from '@emotion/react';
import application from 'Api/application';
import auth from 'Api/auth';
import React, { useEffect, useState } from 'react';
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
    },
  },
}) => {
  const [documentReceoption, setDocumentReceoption] =
    useState<boolean>(isDocumentReception);
  const {
    setShowPassModal,
    setShowScoreModal,
    setModalPeriod,
    setModalName,
    setModalRegistrationNumber,
  } = useStore();

  const buttonOnclick = (
    registrationNumber: number,
    name: string,
    period: 1 | 2,
  ) => {
    setModalRegistrationNumber(registrationNumber);
    setModalName(name);
    setModalPeriod(period);
    period === 1 ? setShowPassModal() : setShowScoreModal();
  };

  const documentSubmission = async () => {
    const data = {
      registrationNumber: registrationNumber,
    };
    try {
      await application.document(data);
      setDocumentReceoption(documentReceoption => !documentReceoption);
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
              background: ${documentReceoption && '#19BAFF'};
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
      <S.Button onClick={() => buttonOnclick(applicationIdx, name, 1)}>
        선택
      </S.Button>
      <S.Button onClick={() => buttonOnclick(applicationIdx, name, 2)}>
        입력
      </S.Button>
    </S.ContentBox>
  );
};

export default ContentBox;
