import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { css } from '@emotion/react';
import { FAQType } from 'type/faq';

type FAQBoxType = FAQType & {
  keyword: string;
};

const FAQBox: React.FC<FAQBoxType> = ({ question, answer, keyword }) => {
  const {
    isFAQSearching,
    setShowFAQModal,
    setFAQModalTitle,
    setFAQModalContent,
  } = useStore();

  const showAnswer = () => {
    setShowFAQModal();
    setFAQModalTitle(question);
    setFAQModalContent(answer);
  };

  return (
    <S.FAQBox
      onClick={showAnswer}
      css={css`
        &:hover {
          background: ${isFAQSearching && 'rgba(255, 255, 255, 0.29);'};
          p {
            color: ${isFAQSearching && 'rgba(255, 255, 255, 0.65);'};
          }
          p > span {
            color: ${isFAQSearching && '#ffffff'};
          }
        }
      `}
    >
      <S.Title
        css={css`
          color: ${isFAQSearching && 'rgba(15, 9, 33, 0.52);'};
        `}
      >
        {isFAQSearching
          ? question.split(keyword).map((title: string, index: number) => {
              return index < question.split(keyword).length - 1 ? (
                <>
                  {title}
                  <S.IsSearching key={index}>{keyword}</S.IsSearching>
                </>
              ) : (
                title
              );
            })
          : question}
      </S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
