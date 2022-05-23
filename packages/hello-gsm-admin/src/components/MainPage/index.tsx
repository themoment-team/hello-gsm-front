import PassModal from 'components/PassModal';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';

const MainPage: NextPage = () => {
  const { showPassModal, setShowPassModal } = useStore();
  const is_document_reception = true;

  return (
    <S.MainPage>
      {showPassModal && <PassModal />}
      <S.MainPageContent>
        <S.Searchbox>
          <S.SearchInput placeholder="검색어를 입력하세요" />
          <S.SearchButton>검색</S.SearchButton>
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
          <S.ContentBox>
            <S.Content>
              <S.RegistrationNumber>2022</S.RegistrationNumber>
              <S.Name>김형록</S.Name>
              <S.Screening>사회통합전형</S.Screening>
              <S.SchoolName>성덕중학교</S.SchoolName>
              <S.isDocumentReception>
                <S.Checkbox
                  css={css`
                    background: ${is_document_reception && '#19BAFF'};
                  `}
                />
              </S.isDocumentReception>
              <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
              <S.GuardianNumber>010-1234-5678</S.GuardianNumber>
              <S.TeacherNumber>010-1234-5678</S.TeacherNumber>
            </S.Content>
            <S.Pass onClick={setShowPassModal}>선택</S.Pass>
            <S.Pass onClick={setShowPassModal}>선택</S.Pass>
          </S.ContentBox>
        </S.ContentList>
      </S.MainPageContent>
    </S.MainPage>
  );
};

export default MainPage;
