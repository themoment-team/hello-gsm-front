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
import { useRef, useState } from 'react';
import { ApplicantsType, ApplicantType } from 'Types/application';
import application from 'Api/application';

const MainPage: NextPage<ApplicantsType> = ({ data }) => {
  // const [applications, setApplications] = useState<ApplicantsType>(data);
  const [applicationList, setApplicationList] = useState<ApplicantType[]>(data);
  const { showPassModal, showScoreModal } = useStore();
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

  const getSearchList = async () => {
    const { data }: ApplicantsType = await application.getList(1, keyword);
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
          {applicationList.map((content, index: number) => (
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
