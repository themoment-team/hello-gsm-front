import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';

const FAQBox: React.FC<FAQType> = ({ question, answer }) => {
  const { setShowModal, setModalTitle, setModalContent } = useStore();

  const showAnswer = () => {
    setShowModal();
    setModalTitle(question);
    setModalContent(answer);
  };

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.Title>{question}</S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
