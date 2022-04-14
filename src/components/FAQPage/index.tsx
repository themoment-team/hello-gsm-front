import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Common/Header';
import { useForm } from 'react-hook-form';
import * as I from '../../Assets/svg';
import * as S from './style';

interface FAQType {
  faqData: {
    title: string;
    content: string;
  }[];
}

const FAQPage: NextPage<FAQType> = ({ faqData }) => {
  console.log(faqData);

  const { register, watch } = useForm();
  console.log(watch());

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
            {...register('keywords')}
          />
        </S.SearchWrapper>
        <S.FAQList>
          
        </S.FAQList>
      </S.FAQWrapper>
    </S.FAQPage>
  );
};

export default FAQPage;
