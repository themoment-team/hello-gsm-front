import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Header from '../Common/Header';
import * as I from '../../Assets/svg';
import * as S from './style';
import FAQBox from '../FAQBox';
import FAQModal from '../FAQModal';
import useStore from '../../Stores/StoreContainer';

type FAQDataType = {
  faqData: FAQType[];
};

export type FAQType = {
  question: string;
  answer: string;
};

const FAQPage: NextPage<FAQDataType> = ({ faqData }) => {
  const [faqList, setFaqList] = useState<FAQType[]>(faqData);
  const [keyword, setKeyword] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { showFAQModal, isSearching, setIsSearching } = useStore();

  const searching = (e: any) => {
    setKeyword(e.target.value);
    e.target.value === '' ? setIsSearching(false) : setIsSearching(true);
  };

  useEffect(() => {
    keyword === '' && setIsSearching(false);
    isSearching
      ? setFaqList(
          faqData &&
            faqData.filter(
              (faq: FAQType) =>
                faq.question.includes(keyword) || faq.answer.includes(keyword),
            ),
        )
      : setFaqList(
          faqData &&
            faqData.filter(
              (faq: FAQType) =>
                (pageIndex - 1) * 10 <= faqData.indexOf(faq) &&
                faqData.indexOf(faq) < pageIndex * 10,
            ),
        );
  }, [keyword, pageIndex, isSearching]);

  const selectPage = (index: number) => setPageIndex(index);

  const plusPageIndex = () =>
    pageIndex < 3 && setPageIndex(pageIndex => pageIndex + 1);

  const minusPageIndex = () =>
    pageIndex > 1 && setPageIndex(pageIndex => pageIndex - 1);

  const selectStyle = (index: number) =>
    pageIndex === index && { color: '#ffffff' };

  return (
    <>
      {showFAQModal && <FAQModal />}
      <Header />
      <S.FAQPage>
        <S.Title>자주 묻는 질문</S.Title>
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
          {faqData &&
            faqList.map((faq: FAQType, index: number) => (
              <FAQBox
                key={index}
                question={faq.question}
                answer={faq.answer}
                keyword={keyword}
              />
            ))}
        </S.FAQList>
        {!isSearching && (
          <S.FAQListIndex>
            <S.ChangeAllowButton onClick={minusPageIndex}>
              <I.LeftButton />
            </S.ChangeAllowButton>
            <S.FAQListIndexButtonWrapper>
              <S.ChangeAllowButton
                onClick={() => selectPage(1)}
                css={selectStyle(1)}
              >
                1
              </S.ChangeAllowButton>
              <S.ChangeAllowButton
                onClick={() => selectPage(2)}
                css={selectStyle(2)}
              >
                2
              </S.ChangeAllowButton>
              <S.ChangeAllowButton
                onClick={() => selectPage(3)}
                css={selectStyle(3)}
              >
                3
              </S.ChangeAllowButton>
            </S.FAQListIndexButtonWrapper>
            <S.ChangeAllowButton onClick={plusPageIndex}>
              <I.RightButton />
            </S.ChangeAllowButton>
          </S.FAQListIndex>
        )}
      </S.FAQPage>
      <S.SkyBlueBall />
      <S.BlueBall />
    </>
  );
};

export default FAQPage;
