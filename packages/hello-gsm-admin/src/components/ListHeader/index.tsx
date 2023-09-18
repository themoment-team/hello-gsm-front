import React, { Dispatch, SetStateAction, useState } from 'react';

import * as S from './style';

import { SearchIcon } from 'Assets/svg';

import { PrintButton } from 'components';

import { SearchTagType } from 'Types/searchTag';

interface ListHeaderType {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setSearchTag: Dispatch<SetStateAction<SearchTagType>>;
  searchTag: SearchTagType;
}

const ListHeader: React.FC<ListHeaderType> = ({
  searchValue,
  setSearchValue,
  setSearchTag,
  searchTag,
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
        <S.ButtonWrapper>
          <S.SelectWrapper>
            <S.SelectBox
              name="tags"
              id="tag"
              value={searchTag}
              onChange={e => {
                const tagValue = e.target.value;
                if (
                  tagValue === 'PHONE_NUMBER' ||
                  tagValue === 'SCHOOL' ||
                  tagValue === 'APPLICANT'
                ) {
                  setSearchTag(tagValue);
                }
              }}
            >
              <option value="PHONE_NUMBER">전화번호</option>
              <option value="SCHOOL">중학교 이름</option>
              <option value="APPLICANT">지원자 이름</option>
            </S.SelectBox>
          </S.SelectWrapper>
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
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <PrintButton printType="excel" />
          <PrintButton printType="ticket" />
        </S.ButtonWrapper>
      </S.ListHeaderContent>
    </S.ListHeaderWrapper>
  );
};

export default ListHeader;
