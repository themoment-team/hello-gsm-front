import * as S from './style';
import * as I from 'Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, MouseEvent, useState, useEffect } from 'react';

const FAQModal: React.FC = () => {
  const [widthSize, setWidthSize] = useState<number>(0);
  const { showFAQModal, setShowFAQModal, FAQModalTitle, FAQModalContent } =
    useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    setWidthSize(window.screen.availWidth);
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
        <S.CloseButtonWrap>
          <S.CloseButton onClick={setShowFAQModal}>
            <I.CloseButton />
          </S.CloseButton>
        </S.CloseButtonWrap>
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
