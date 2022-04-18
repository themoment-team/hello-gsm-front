import * as S from './style';
import { FAQType } from 'components/FAQPage';
import useStore from 'Stores/StoreContainer';

const FAQBox: React.FC<FAQType> = ({ title, content }) => {
  const { setShowModal, setModalTitle, setModalContent } = useStore();

  const showAnswer = () => {
    setShowModal();
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
