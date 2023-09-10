import * as S from './style';
import PaginationIcon from 'Assets/svg/PaginationIcon';

interface PaginationControllerProps {
  totalPages?: number;
}

const PaginationController: React.FC<PaginationControllerProps> = ({
  totalPages,
}) => {
  return (
    <S.Test>
      <S.PaginationButton type="button">
        <PaginationIcon turn="right" />
      </S.PaginationButton>
      <S.NumberWrap>
        {[...Array(totalPages)].map((_, index) => {
          return <span key={index + 1}>{index + 1}</span>;
        })}
      </S.NumberWrap>
      <S.PaginationButton>
        <PaginationIcon turn="left" />
      </S.PaginationButton>
    </S.Test>
  );
};

export default PaginationController;
