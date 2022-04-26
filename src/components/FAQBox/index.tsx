import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';

const FAQBox: React.FC<FAQType> = ({ title, content }) => {
  const { setShowFAQModal, setModalTitle, setModalContent } = useStore();

  const showAnswer = () => {
    setShowFAQModal();
    setModalTitle(title);
    setModalContent(content);
  };

  return (
    <S.FAQBox onClick={showAnswer}>
      <S.Title>{title}</S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
