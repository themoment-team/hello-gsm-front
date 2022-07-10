import { PassModal, ScoreModal } from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useRef, useState } from 'react';
import { applicantsType } from 'pages';

const MainPage: NextPage<applicantsType> = ({ data }) => {
  const {
    showPassModal,
    setShowPassModal,
    showScoreModal,
    setShowScoreModal,
    setPassModalPeriod,
    setPassModalName,
    setPassModalRegistrationNumber,
  } = useStore();
  const searchRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>('');

  const search = () => {
    if (searchRef.current) {
      setKeyword(searchRef.current.value);
    }
  };

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const buttonOnclick = (
    registrationNumber: number,
    name: string,
    period: 1 | 2,
  ) => {
    setPassModalRegistrationNumber(registrationNumber);
    setPassModalName(name);
    setPassModalPeriod(period);
    period === 1 ? setShowPassModal() : setShowScoreModal();
  };

  return (
    <S.MainPage>
      {showPassModal && <PassModal />}
      {showScoreModal && <ScoreModal />}
      <Global
        styles={css`
          body {
            overflow: ${showPassModal || showScoreModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.MainPageContent>
        <S.FunctionBox>
          <S.Logout>로그아웃</S.Logout>
          <S.Searchbox>
            <S.SearchInput
              placeholder="검색어를 입력하세요"
              ref={searchRef}
              onKeyPress={enterEvent}
            />
            <S.SearchButton onClick={search}>검색</S.SearchButton>
          </S.Searchbox>
          <S.Print>수험표 출력</S.Print>
        </S.FunctionBox>
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
          {data
            .filter(
              ({ name, registrationNumber }) =>
                name.includes(keyword) ||
                registrationNumber === parseInt(keyword),
            )
            .map(
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
                },
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
                  <S.Button
                    onClick={() => buttonOnclick(registrationNumber, name, 1)}
                  >
                    선택
                  </S.Button>
                  <S.Button
                    onClick={() => buttonOnclick(registrationNumber, name, 2)}
                  >
                    입력
                  </S.Button>
                </S.ContentBox>
              ),
            )}
        </S.ContentList>
      </S.MainPageContent>
      <S.BlueBall />
      <S.SkyBlueBall />
    </S.MainPage>
  );
};

export default MainPage;
