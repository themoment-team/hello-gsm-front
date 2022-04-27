import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';

const FAQBox: React.FC<FAQType> = ({ question, answer }) => {
  const { setShowFAQModal, setFAQModalTitle, setFAQModalContent } = useStore();

  const showAnswer = () => {
    setShowFAQModal();
    setFAQModalTitle(question);
    setFAQModalContent(answer);
  };

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.Title>{question}</S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
