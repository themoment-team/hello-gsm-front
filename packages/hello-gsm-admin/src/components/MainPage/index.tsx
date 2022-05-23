import PassModal from 'components/PassModal';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';

interface applicantsType {
  registrationNumber: number;
  name: string;
  screening: string;
  schoolName: string;
  isDocumentReception: boolean;
  phoneNumber: string;
  guardianNumber: string;
  teacherNumber: string;
}

const MainPage: NextPage = () => {
  const { showPassModal, setShowPassModal } = useStore();
  const applicants: applicantsType[] = [
    {
      registrationNumber: 2001,
      name: '김형록',
      screening: '사회통합전형',
      schoolName: '성덕중학교',
      isDocumentReception: true,
      phoneNumber: '010-1234-5678',
      guardianNumber: '010-1234-5678',
      teacherNumber: '010-1234-5678',
    },
    {
      registrationNumber: 2002,
      name: '김형록',
      screening: '사회통합전형',
      schoolName: '성덕중학교',
      isDocumentReception: false,
      phoneNumber: '010-1234-5678',
      guardianNumber: '010-1234-5678',
      teacherNumber: '010-1234-5678',
    },
    {
      registrationNumber: 2003,
      name: '김형록',
      screening: '사회통합전형',
      schoolName: '성덕중학교',
      isDocumentReception: true,
      phoneNumber: '010-1234-5678',
      guardianNumber: '010-1234-5678',
      teacherNumber: '010-1234-5678',
    },
    {
      registrationNumber: 2003,
      name: '김형록',
      screening: '사회통합전형',
      schoolName: '성덕중학교',
      isDocumentReception: false,
      phoneNumber: '010-1234-5678',
      guardianNumber: '010-1234-5678',
      teacherNumber: '010-1234-5678',
    },
  ];

  const search = () => {
    console.log('search');
  };

  return (
    <S.MainPage>
      {showPassModal && <PassModal />}
      <S.MainPageContent>
        <S.Searchbox>
          <S.SearchInput placeholder="검색어를 입력하세요" />
          <S.SearchButton onClick={search}>검색</S.SearchButton>
        </S.Searchbox>
        <S.Header>
          <S.HeaderElement>지원자 번호</S.HeaderElement>
          <S.HeaderElement>성명</S.HeaderElement>
          <S.HeaderElement>전형</S.HeaderElement>
          <S.HeaderElement
            css={css`
              width: 140px;
            `}
          >
            출신중
          </S.HeaderElement>
          <S.HeaderElement>서류제출</S.HeaderElement>
          <S.HeaderElement>지원자연락처</S.HeaderElement>
          <S.HeaderElement>부모님연락처</S.HeaderElement>
          <S.HeaderElement>담임선생님연락처</S.HeaderElement>
          <S.HeaderElement
            css={css`
              width: 40px;
            `}
          >
            1차
          </S.HeaderElement>
          <S.HeaderElement
            css={css`
              width: 40px;
            `}
          >
            2차
          </S.HeaderElement>
        </S.Header>
        <S.ContentList>
          {applicants.map(
            (
              {
                registrationNumber,
                name,
                screening,
                schoolName,
                isDocumentReception,
                phoneNumber,
                guardianNumber,
                teacherNumber,
              }: applicantsType,
              index: number,
            ) => (
              <S.ContentBox key={index}>
                <S.Content>
                  <S.RegistrationNumber>
                    {registrationNumber}
                  </S.RegistrationNumber>
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
                <S.Pass onClick={setShowPassModal}>선택</S.Pass>
                <S.Pass onClick={setShowPassModal}>선택</S.Pass>
              </S.ContentBox>
            ),
          )}
        </S.ContentList>
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
