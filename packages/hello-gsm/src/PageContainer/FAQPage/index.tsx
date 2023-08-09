import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import * as I from 'Assets/svg';
import * as S from './style';
import { FAQBox } from 'components';
import useStore from 'Stores/StoreContainer';
import auth from 'Api/auth';
import { FAQType } from 'type/faq';
import { css } from '@emotion/react';

type FAQDataType = {
  faqData: FAQType[];
};

const FAQPage: NextPage<FAQDataType> = ({ faqData }) => {
  const [faqList, setFaqList] = useState<FAQType[]>(faqData);
  const [keyword, setKeyword] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { isFAQSearching, setIsFAQSearching } = useStore();

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    e.target.value === '' ? setIsFAQSearching(false) : setIsFAQSearching(true);
  };

  useEffect(() => {
    keyword === '' && setIsFAQSearching(false);
    setFaqList(() => {
      if (isFAQSearching) {
        return faqData.filter(
          (faq: FAQType) =>
            faq.question.includes(keyword) || faq.answer.includes(keyword),
        );
      } else {
        return faqData.filter(
          (faq: FAQType) =>
            (pageIndex - 1) * 10 <= faqData.indexOf(faq) &&
            faqData.indexOf(faq) < pageIndex * 10,
        );
      }
    });
  }, [keyword, pageIndex, isFAQSearching]);

  const selectPage = (index: number) => setPageIndex(index);

  const plusPageIndex = () =>
    pageIndex < 3 && setPageIndex(pageIndex => pageIndex + 1);

  const minusPageIndex = () =>
    pageIndex > 1 && setPageIndex(pageIndex => pageIndex - 1);

  const selectStyle = (index: number) =>
    pageIndex === index &&
    css`
      font-weight: 700;
    `;

  return (
    <>
      <S.FAQPage>
        <S.Title>자주 묻는 질문</S.Title>
        <S.FAQContent>
          <S.SearchWrapper>
            <I.SearchIcon />
            <S.Search
              type="text"
              placeholder="검색하실 질문을 입력해주세요"
              onChange={searching}
              value={keyword}
            />
          </S.SearchWrapper>
          <S.FAQList>
            {faqList?.map((faq: FAQType, index: number) => (
              <FAQBox
                key={index}
                question={faq.question}
                answer={faq.answer}
                keyword={keyword}
                pageIndex={pageIndex}
              />
            ))}
          </S.FAQList>
          {!isFAQSearching && (
            <S.FAQListIndex>
              <S.ChangeAllowButton
                onClick={minusPageIndex}
                disabled={pageIndex === 1}
              >
                <I.LeftButton />
              </S.ChangeAllowButton>
              <S.FAQListIndexButtonWrapper>
                {[1, 2, 3].map(num => (
                  <S.ListIndex
                    key={num}
                    onClick={() => {
                      selectPage(num);
                    }}
                    css={selectStyle(num)}
                  >
                    {num}
                  </S.ListIndex>
                ))}
              </S.FAQListIndexButtonWrapper>
              <S.ChangeAllowButton
                onClick={plusPageIndex}
                disabled={pageIndex === 3}
              >
                <I.RightButton />
              </S.ChangeAllowButton>
            </S.FAQListIndex>
          )}
        </S.FAQContent>
      </S.FAQPage>
    </>
  );
};

export default FAQPage;
