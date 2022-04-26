import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';

const FAQBox: React.FC<FAQType> = ({ title, content }) => {
  const { setShowFAQModal, setFAQModalTitle, setFAQModalContent } = useStore();

  const showAnswer = () => {
    setShowFAQModal();
    setFAQModalTitle(title);
    setFAQModalContent(content);
  };

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.Title>{title}</S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
