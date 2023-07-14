import * as S from './style';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';
import { FAQType } from 'type/faq';
import { useState } from 'react';

type FAQBoxType = FAQType & {
  keyword: string;
  id: number;
  answerIndex: number;
  setAnswerIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FAQBox: React.FC<FAQBoxType> = ({
  question,
  answer,
  keyword,
  id,
  answerIndex,
  setAnswerIndex,
}) => {
  const {
    isFAQSearching,
    setShowFAQModal,
    setFAQModalTitle,
    setFAQModalContent,
  } = useStore();

  const [toggle, setToggle] = useState<boolean>(false);

  const showAnswer = (id: number) => {
    setToggle(pre => (answerIndex === id ? !pre : true));
    setAnswerIndex(id);
  };

  return (
    <S.FAQBox onClick={() => showAnswer(id)}>
      <S.TitleContent>
        <S.Title>
          {isFAQSearching
            ? question.split(keyword).map((title: string, index: number) => {
                return index < question.split(keyword).length - 1 ? (
                  <span key={index}>
                    {title}
                    <S.IsSearching>{keyword}</S.IsSearching>
                  </span>
                ) : (
                  title
                );
              })
            : question}
        </S.Title>
        {toggle && answerIndex === id ? <I.UpButton /> : <I.DownButton />}
      </S.TitleContent>
      {toggle && answerIndex === id && (
        <S.AnswerContent>{answer}</S.AnswerContent>
      )}
    </S.FAQBox>
  );
};

export default FAQBox;
