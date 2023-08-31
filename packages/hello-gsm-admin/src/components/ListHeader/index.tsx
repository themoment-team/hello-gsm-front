import React, { Dispatch, SetStateAction, useState } from 'react';

import * as S from './style';

import { SearchIcon } from 'test/svg';

import { PrintButton } from 'components';

interface ListHeaderType {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const ListHeader: React.FC<ListHeaderType> = ({
  searchValue,
  setSearchValue,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => setIsFocus(prev => !prev);

  return (
    <S.ListHeaderWrapper>
      <S.TitleWrapper>
        <S.FinalSubmit>최종 제출&nbsp;</S.FinalSubmit>
        <S.SubmitNumber>{86}</S.SubmitNumber>
      </S.TitleWrapper>
      <S.ListHeaderContent>
        <S.SearchInputBox>
          <S.SearchInput
            value={searchValue}
            onFocus={handleFocus}
            onBlur={handleFocus}
            placeholder={isFocus ? '' : '검색어를 입력해주세요.'}
            onChange={e => setSearchValue(e.target.value)}
          />
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
