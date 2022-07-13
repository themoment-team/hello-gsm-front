import { css } from '@emotion/react';
import React from 'react';
import useStore from 'Stores/StoreContainer';
import { ApplicantType } from 'Types/application';
import * as S from './style';

interface ContentType {
  data: ApplicantType;
}

const ContentBox: React.FC<ContentType> = ({
  data: {
    registrationNumber,
    name,
    screening,
    schoolName,
    isDocumentReception,
    phoneNumber,
    guardianNumber,
    teacherNumber,
  },
}) => {
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

  return (
    <S.ContentBox>
      <S.Content>
        <S.RegistrationNumber>{registrationNumber}</S.RegistrationNumber>
        <S.Name>{name}</S.Name>
        <S.Screening>{screening}</S.Screening>
        <S.SchoolName>{schoolName}</S.SchoolName>
        <S.isDocumentReception>
          <S.Checkbox
            css={css`
              background: ${isDocumentReception && '#19BAFF'};
            `}
          />
        </S.isDocumentReception>
        <S.PhoneNumber>{phoneNumber}</S.PhoneNumber>
        <S.GuardianNumber>{guardianNumber}</S.GuardianNumber>
        <S.TeacherNumber>{teacherNumber}</S.TeacherNumber>
      </S.Content>
      <S.Button onClick={() => buttonOnclick(registrationNumber, name, 1)}>
        선택
      </S.Button>
      <S.Button onClick={() => buttonOnclick(registrationNumber, name, 2)}>
        입력
      </S.Button>
    </S.ContentBox>
  );
};

export default ContentBox;
