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
  const [answerIndex, setAnswerIndex] = useState<number>(-1);

  const { isFAQSearching, setIsFAQSearching, setLogged } = useStore();

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

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await auth.check();
        setLogged(true);
      } catch (error: any) {
        if (error.response?.status === 401) {
          try {
            // accessToken 발급
            await auth.refresh();
            setLogged(true);
          } catch (error) {
            setLogged(false);
          }
        }
      }
    };
    checkLogin();
  }, []);

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
                id={index}
                answerIndex={answerIndex}
                setAnswerIndex={setAnswerIndex}
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
                <S.ListIndex
                  onClick={() => {
                    selectPage(1);
                  }}
                  css={selectStyle(1)}
                >
                  1
                </S.ListIndex>
                <S.ListIndex
                  onClick={() => {
                    selectPage(2);
                  }}
                  css={selectStyle(2)}
                >
                  2
                </S.ListIndex>
                <S.ListIndex
                  onClick={() => {
                    selectPage(3);
                  }}
                  css={selectStyle(3)}
                >
                  3
                </S.ListIndex>
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
