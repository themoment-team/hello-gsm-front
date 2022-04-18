import * as S from './style';
import * as I from '../../Assets/svg';
import useStore from 'Stores/StoreContainer';
import { css, Global } from '@emotion/react';
import { useCallback, MouseEvent } from 'react';

const FAQModal: React.FC = () => {
  const { showModal, setShowModal, modalTitle, modalContent } = useStore();

  const removeClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  return (
    <S.FAQModal onClick={setShowModal}>
      <Global
        styles={css`
          body {
            overflow: ${showModal ? 'hidden' : 'visible'};
          }
        `}
      />
      <S.FAQModalBox onClick={removeClick}>
        <S.CloseButton onClick={setShowModal}>
          <I.CloseButton />
        </S.CloseButton>
        <S.ContentBox>
          <S.QuestionBox>
            <S.QuestionTitle>
              <S.QuestionTitleContent>{modalTitle}</S.QuestionTitleContent>
            </S.QuestionTitle>
            <I.Questioner />
          </S.QuestionBox>
          <S.AnswerBox>
            <S.AnswerContent>
              <S.AnswerHeader>답변</S.AnswerHeader>
              <S.AnswerBody>{modalContent}</S.AnswerBody>
            </S.AnswerContent>
          </S.AnswerBox>
        </S.ContentBox>
      </S.FAQModalBox>
    </S.FAQModal>
  );
};

export default FAQModal;
