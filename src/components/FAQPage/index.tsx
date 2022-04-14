import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import * as I from '../../Assets/svg';
import * as S from './style';
import FAQBox from 'components/FAQBox';

type FAQDataType = {
  faqData: FAQType[];
};

export type FAQType = {
  title: string;
  content: string;
};

const FAQPage: NextPage<FAQDataType> = ({ faqData }) => {
  const [faqList, setFaqList] = useState<FAQType[]>(faqData);
  const [keyword, setKeyword] = useState<string>('');

  const searching = e => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setFaqList(faqData.filter((faq: FAQType) => faq.title.includes(keyword)));
  }, [keyword]);

  return (
    <S.FAQPage>
      <Header />
      <S.FAQWrapper>
        <S.Title>자주 묻는 질문</S.Title>
        <S.SearchWrapper>
          <I.SearchIcon />
          <S.Search
            type="text"
            placeholder="질문 제목을 입력해주세요"
            onChange={searching}
            value={keyword}
          />
        </S.SearchWrapper>
        <S.FAQList>
          {faqList.map((faq: FAQType, index: number) => (
            <FAQBox key={index} title={faq.title} content={faq.content} />
          ))}
        </S.FAQList>
      </S.FAQWrapper>
    </S.FAQPage>
  );
};

export default FAQPage;
