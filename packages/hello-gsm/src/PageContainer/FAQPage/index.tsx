import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import * as I from 'Assets/svg';
import * as S from './style';
import { Header, FAQBox, FAQModal } from 'components';
import useStore from 'Stores/StoreContainer';
import auth from 'Api/auth';
import { FAQType } from 'type/faq';

type FAQDataType = {
  faqData: FAQType[];
};

const FAQPage: NextPage<FAQDataType> = ({ faqData }) => {
  const [faqList, setFaqList] = useState<FAQType[]>(faqData);
  const [keyword, setKeyword] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { showFAQModal, isFAQSearching, setIsFAQSearching, setLogged } =
    useStore();

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    e.target.value === '' ? setIsFAQSearching(false) : setIsFAQSearching(true);
  };

  useEffect(() => {
    keyword === '' && setIsFAQSearching(false);
    isFAQSearching
      ? setFaqList(
          faqData?.filter(
            (faq: FAQType) =>
              faq.question.includes(keyword) || faq.answer.includes(keyword),
          ),
        )
      : setFaqList(
          faqData?.filter(
            (faq: FAQType) =>
              (pageIndex - 1) * 10 <= faqData.indexOf(faq) &&
              faqData.indexOf(faq) < pageIndex * 10,
          ),
        );
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
    pageIndex === index && { color: '#ffffff' };

  return (
    <>
      {showFAQModal && <FAQModal />}
      <Header />
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
              />
            ))}
          </S.FAQList>
          {!isFAQSearching && (
            <S.FAQListIndex>
              <S.ChangeAllowButton onClick={minusPageIndex}>
                <I.LeftButton />
              </S.ChangeAllowButton>
              <S.FAQListIndexButtonWrapper>
                <S.ListIndex onClick={() => selectPage(1)} css={selectStyle(1)}>
                  1
                </S.ListIndex>
                <S.ListIndex onClick={() => selectPage(2)} css={selectStyle(2)}>
                  2
                </S.ListIndex>
                <S.ListIndex onClick={() => selectPage(3)} css={selectStyle(3)}>
                  3
                </S.ListIndex>
              </S.FAQListIndexButtonWrapper>
              <S.ChangeAllowButton onClick={plusPageIndex}>
                <I.RightButton />
              </S.ChangeAllowButton>
            </S.FAQListIndex>
          )}
        </S.FAQContent>
      </S.FAQPage>
      <S.SkyBlueBall />
      <S.BlueBall />
    </>
  );
};

export default FAQPage;
