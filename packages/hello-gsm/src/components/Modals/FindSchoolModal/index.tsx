import { css, Global } from '@emotion/react';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import useStore from 'Stores/StoreContainer';
import * as S from './style';
import * as I from 'Assets/svg';
import axios from 'axios';

interface schoolType {
  SCHUL_NM: string;
  ORG_RDNMA: string;
  LCTN_SC_NM: string;
}

const FindSchoolModal: React.FC = () => {
  const {
    showFindSchoolModal,
    setShowFindSchoolModal,
    setSchoolName,
    setSchoolLocation,
  } = useStore();

  const [keyword, setKeyword] = useState<string>('');
  const [schools, setSchools] = useState<schoolType[]>([]);
  const schoolNameInput = useRef<HTMLInputElement>(null);

  const search = () => {
    if (schoolNameInput.current) {
      setKeyword(schoolNameInput.current.value);
    }
  };

  useEffect(() => {
    keyword && getSchools();
  }, [keyword]);

  const getSchools = async () => {
    try {
      const {
        data: {
          schoolInfo: {
            [1]: { row },
          },
        },
      } = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.NEIS_API_KEY}&Type=json&SCHUL_NM=${keyword}`,
      );
      setSchools(row);
    } catch (e) {
      console.log(e);
    }
  };

  const selectSchool = (index: number) => {
    setSchoolName(schools[index].SCHUL_NM);
    setSchoolLocation(schools[index].LCTN_SC_NM);
    setShowFindSchoolModal();
  };

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.FindSchoolModal onClick={setShowFindSchoolModal}>
      <Global
        styles={css`
          body {
            overflow: ${showFindSchoolModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.FindSchoolModalBox onClick={removeClick}>
        <S.CancelButton onClick={setShowFindSchoolModal}>
          <I.FindSchoolClose />
        </S.CancelButton>
        <S.ContentBox>
          <S.Title>학교찾기</S.Title>
          <S.SearchBox>
            <I.FindSchoolSearchIcon />
            <S.SchoolNameInput
              placeholder="학교 이름을 검색해주세요"
              onKeyUp={enterEvent}
              ref={schoolNameInput}
            />
            <S.SearchButton onClick={search}>검색</S.SearchButton>
          </S.SearchBox>
          <S.ListBox>
            <S.ListTitleBox>
              <S.ListTitle>학교명</S.ListTitle>
              <S.ListTitle
                css={css`
                  margin-left: 150px;
                `}
              >
                주소
              </S.ListTitle>
            </S.ListTitleBox>
            <S.ListContentBox>
              {schools.map((school: schoolType, index: number) => {
                return (
                  <S.ListContent
                    key={index}
                    onClick={() => selectSchool(index)}
                  >
                    <S.SchoolName>{school.SCHUL_NM}</S.SchoolName>
                    <S.SchoolAddress>{school.ORG_RDNMA}</S.SchoolAddress>
                  </S.ListContent>
                );
              })}
            </S.ListContentBox>
          </S.ListBox>
        </S.ContentBox>
      </S.FindSchoolModalBox>
    </S.FindSchoolModal>
  );
};

export default FindSchoolModal;
