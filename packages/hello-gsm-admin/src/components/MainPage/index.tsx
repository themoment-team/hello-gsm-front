import PassModal from 'components/PassModal';
import type { NextPage } from 'next';
import * as S from './style';

const MainPage: NextPage = () => {
  return (
    <>
      {/* <PassModal /> */}
      <S.MainPageContent>
        <S.Searchbox>
          <S.SearchInput placeholder="검색어를 입력하세요" />
          <S.SearchButton>검색</S.SearchButton>
        </S.Searchbox>
        <S.Header>
          <S.HeaderElement>지원자 번호</S.HeaderElement>
          <S.HeaderElement>성명</S.HeaderElement>
          <S.HeaderElement>전형</S.HeaderElement>
          <S.HeaderElement>출신중</S.HeaderElement>
          <S.HeaderElement>서류제출</S.HeaderElement>
          <S.HeaderElement>지원자연락처</S.HeaderElement>
          <S.HeaderElement>부모님연락처</S.HeaderElement>
          <S.HeaderElement>담임선생님연락처</S.HeaderElement>
          <S.HeaderElement>1차</S.HeaderElement>
          <S.HeaderElement>2차</S.HeaderElement>
        </S.Header>
        <S.ContentList>
          <S.ContentBox>
            <S.Content>
              
            </S.Content>
            <S.Pass>선택</S.Pass>
            <S.Pass>선택</S.Pass>
          </S.ContentBox>
        </S.ContentList>
      </S.MainPageContent>
    </>
  );
};

export default MainPage;
