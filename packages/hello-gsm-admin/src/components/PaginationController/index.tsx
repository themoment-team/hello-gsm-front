import * as S from './style';
import PaginationIcon from 'Assets/svg/PaginationIcon';
import { useRouter } from 'next/router';

interface PaginationControllerProps {
  totalPages: number;
  pageNumber: number;
}

const PaginationController: React.FC<PaginationControllerProps> = ({
  totalPages,
  pageNumber,
}) => {
  const router = useRouter();
  const pathName = router.pathname;

  const updatePageNumber = (pageNumber: number) => {
    router.push(`${pathName}?pageNumber=${pageNumber}`);
  };
  return (
    <S.Test>
      <S.PaginationButton
        type="button"
        onClick={() => updatePageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <PaginationIcon turn="right" disabled={pageNumber === 1} />
      </S.PaginationButton>
      <S.NumberWrap>
        {[...[totalPages]].map((_, index) => {
          const showNumber = index + 1;
          return (
            <S.PageNumberButton
              key={showNumber}
              onClick={() => updatePageNumber(showNumber)}
              selected={pageNumber === showNumber}
            >
              {showNumber}
            </S.PageNumberButton>
          );
        })}
      </S.NumberWrap>
      <S.PaginationButton
        type="button"
        onClick={() => updatePageNumber(pageNumber + 1)}
        disabled={pageNumber === totalPages}
      >
        <PaginationIcon turn="left" disabled={pageNumber === totalPages} />
      </S.PaginationButton>
    </S.Test>
  );
};

export default PaginationController;
