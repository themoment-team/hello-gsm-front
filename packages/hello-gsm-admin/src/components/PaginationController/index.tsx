import * as S from './style';
import PaginationIcon from 'Assets/svg/PaginationIcon';

interface PaginationControllerProps {
  totalPages: number;
  pageNumber: number;
}

const PaginationController: React.FC<PaginationControllerProps> = ({
  totalPages,
  pageNumber,
}) => {
  return (
    <S.Test>
      <S.PaginationButton type="button">
        <PaginationIcon turn="right" />
      </S.PaginationButton>
      <S.NumberWrap>
        {[...Array(totalPages)].map((_, index) => {
          const showNumber = index + 1;
          return (
            <S.PageNumberButton
              key={showNumber}
              selected={pageNumber === showNumber}
            >
              {showNumber}
            </S.PageNumberButton>
          );
        })}
      </S.NumberWrap>
      <S.PaginationButton>
        <PaginationIcon turn="left" />
      </S.PaginationButton>
    </S.Test>
  );
};

export default PaginationController;
