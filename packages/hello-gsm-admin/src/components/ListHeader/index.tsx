import React from 'react';

import * as S from './style';

import { SearchIcon } from 'assets/svg';

import { PrintButton } from 'components';

const ListHeader: React.FC = () => {
  return (
    <S.ListHeaderWrapper>
      <S.TitleWrapper>
        <S.FinalSubmit>최종 제출&nbsp;</S.FinalSubmit>
        <S.SubmitNumber>{86}</S.SubmitNumber>
      </S.TitleWrapper>
      <S.ListHeaderContent>
        <S.SearchInputBox>
          <S.SearchInput placeholder="검색어를 입력해주세요." />
          <SearchIcon />
        </S.SearchInputBox>
        <S.ButtonWrapper>
          <PrintButton printType="excel" />
          <PrintButton printType="ticket" />
        </S.ButtonWrapper>
      </S.ListHeaderContent>
    </S.ListHeaderWrapper>
  );
};

export default ListHeader;
