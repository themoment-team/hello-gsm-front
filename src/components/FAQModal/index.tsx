import * as S from './style';
import * as I from '../../Assets/svg';
import useStore from 'Stores/StoreContainer';

const FAQModal: React.FC = () => {
  const { setShowModal, modalTitle, modalContent } = useStore();

  return (
    <S.FAQModal>
      <S.FAQModalBox>
        <S.CloseButton onClick={setShowModal}>
          <I.CloseButton />
        </S.CloseButton>
        <S.ContentBox>
          <S.QuestionBox>
            <S.QuestionTitle>
              <S.QuestionTitleContent>
                <S.PointColor>Q.</S.PointColor>
                {modalTitle}
              </S.QuestionTitleContent>
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
