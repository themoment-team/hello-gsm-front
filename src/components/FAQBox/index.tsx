import * as S from './style';
import { FAQType } from 'components/FAQPage';

const FAQBox: React.FC<FAQType> = ({ title, content }) => {
  const showAnswer = () => {
    // setShowModal(True);
    // setSelectFAQ(True);
  }

  return (
    <S.FAQBox>
      <S.Title>
        <S.PointColor>Q</S.PointColor>
        {title}
      </S.Title>
    </S.FAQBox>
  );
};

export default FAQBox;
