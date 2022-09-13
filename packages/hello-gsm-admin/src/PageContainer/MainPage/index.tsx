import {
  ContentBox,
  Logout,
  MainpageHeader,
  PassModal,
  ScoreModal,
} from 'components';
import type { NextPage } from 'next';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { ApplicantsType } from 'Types/application';
import application from 'Api/application';

const MainPage: NextPage<ApplicantsType> = ({ data }) => {
  const {
    showPassModal,
    setShowPassModal,
    showScoreModal,
    setShowScoreModal,
    setModalPeriod,
    setModalName,
    setModalRegistrationNumber,
  } = useStore();
  const searchRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const { data }: any = await application.getList(1);
    console.log(data);
  };

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
          <Logout />
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
        <MainpageHeader />
        <S.ContentList>
          {data.map((content, index: number) => (
            <ContentBox content={content} key={index} />
          ))}
        </S.ContentList>
      </S.MainPageContent>
      <S.BlueBall />
      <S.SkyBlueBall />
    </S.MainPage>
  );
};

export default MainPage;
