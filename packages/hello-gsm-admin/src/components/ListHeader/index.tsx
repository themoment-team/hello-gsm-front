import React from 'react';

import * as S from './style';

import { ReadingGlassesIcon } from 'assets/svg';

const ListHeader: React.FC = () => {
  return (
    <S.ListHeaderWrapper>
      <S.TitleWrapper>
        <S.FinalSubmit>최종 제출</S.FinalSubmit>
        <S.SubmitNumber>{86}</S.SubmitNumber>
      </S.TitleWrapper>
      <S.ListHeaderContent>
        <S.SearchInputBox>
          <S.SearchInput placeholder="검색어를 입력해주세요." />
          <ReadingGlassesIcon />
        </S.SearchInputBox>
      </S.ListHeaderContent>
    </S.ListHeaderWrapper>
  );
};

export default ListHeader;
