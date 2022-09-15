import { css } from '@emotion/react';
import React from 'react';
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
      schoolName,
      screening,
      teacherCellphoneNumber,
    },
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
        <S.RegistrationNumber>{applicationIdx}</S.RegistrationNumber>
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
        <S.PhoneNumber>{cellphoneNumber}</S.PhoneNumber>
        <S.GuardianNumber>{guardianCellphoneNumber}</S.GuardianNumber>
        <S.TeacherNumber>{teacherCellphoneNumber}</S.TeacherNumber>
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
