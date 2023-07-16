import * as S from './style';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import { FAQType } from 'type/faq';
import { useEffect, useState } from 'react';

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
  const { isFAQSearching } = useStore();
  const [toggle, setToggle] = useState<boolean>(false);

  const showAnswer = (id: number) => {
    setToggle(pre => !pre);
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
        {toggle ? <I.UpButton /> : <I.DownButton />}
      </S.TitleContent>
      <S.AnswerContent isAnimation={toggle} isClicked={answerIndex === id}>
        {answer}
      </S.AnswerContent>
    </S.FAQBox>
  );
};

export default FAQBox;
