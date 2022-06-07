import * as S from './style';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, MouseEvent } from 'react';

const FAQModal: React.FC = () => {
  const { showFAQModal, setShowFAQModal, FAQModalTitle, FAQModalContent } =
    useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.FAQModal onClick={setShowFAQModal}>
      <Global
        styles={css`
          body {
            overflow: ${showFAQModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.FAQModalBox onClick={removeClick}>
        <S.CloseButton onClick={setShowFAQModal}>
          <I.CloseButton />
        </S.CloseButton>
        <S.ContentBox>
          <S.QuestionBox>
            <S.QuestionTitle>
              <S.QuestionTitleContent>{FAQModalTitle}</S.QuestionTitleContent>
            </S.QuestionTitle>
            <I.Questioner />
          </S.QuestionBox>
          <S.AnswerBox>
            <S.AnswerContent>
              <S.AnswerHeader>답변</S.AnswerHeader>
              <S.AnswerBody>{FAQModalContent}</S.AnswerBody>
            </S.AnswerContent>
          </S.AnswerBox>
        </S.ContentBox>
      </S.FAQModalBox>
    </S.FAQModal>
  );
};

export default FAQModal;
