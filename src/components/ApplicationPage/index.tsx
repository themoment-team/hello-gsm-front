import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import { css } from '@emotion/react';
const profile = {
  id: '2021',
};
const ApplicationPage: NextPage = () => {
  return (
    <S.ApplicationPage
      css={css`
        @media print {
          -webkit-print-color-adjust: exact;
        }
      `}
    >
      <S.Template>[서식 1]</S.Template>
      <S.Title>광주소프트웨어마이스터고등학교 입학원서</S.Title>
      <S.Wrap>
        <S.SubTitle>2023학년도 신입생 입학전형</S.SubTitle>
        <S.Box>
          <S.Subject>접수번호</S.Subject>
          <S.Content>{profile.id}</S.Content>
        </S.Box>
      </S.Wrap>
      <S.Container>
        <S.Section1>
          <S.SectionTitle>인적사항</S.SectionTitle>
        </S.Section1>
      </S.Container>
    </S.ApplicationPage>
  );
};

export default ApplicationPage;
