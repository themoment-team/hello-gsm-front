import * as S from './style';
import * as I from 'assets/svg';
import useStore from 'Stores/StoreContainer';
import { FAQType } from 'types/faq';
import { useEffect, useState } from 'react';

type FAQBoxType = FAQType & {
  keyword: string;
  pageIndex: number;
};

const FAQBox: React.FC<FAQBoxType> = ({
  question,
  answer,
  keyword,
  pageIndex,
}) => {
  const { isFAQSearching } = useStore();
  const [toggle, setToggle] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  const showAnswer = () => {
    setToggle(!toggle);
    setIsAnimation(true);
  };

  useEffect(() => {
    setToggle(false);
    setIsAnimation(false);
  }, [pageIndex, keyword]);

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.TitleContent>
        <S.Title>
          {isFAQSearching
            ? question.split(keyword).map((title: string, index: number) => (
                <span key={index}>
                  {title}
                  {index < question.split(keyword).length - 1 && (
                    <S.IsSearching>{keyword}</S.IsSearching>
                  )}
                </span>
              ))
            : question}
        </S.Title>
        {toggle ? <I.UpButton /> : <I.DownButton />}
      </S.TitleContent>
      <S.AnswerContent isClicked={toggle} isAnimation={isAnimation}>
        {answer}
      </S.AnswerContent>
    </S.FAQBox>
  );
};

export default FAQBox;
