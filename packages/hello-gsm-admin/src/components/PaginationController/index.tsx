import * as S from './style';
import PaginationIcon from 'Assets/svg/PaginationIcon';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const pageLimit = 4;
  console.log(pageLimit);
  const currentPage = pageNumber;
  const currentPageGroup = Math.ceil(currentPage / pageLimit);
  const startGroupPage = (currentPageGroup - 1) * pageLimit + 1;
  const endGroupPage = currentPageGroup * pageLimit;

  const updatePageGroup = () => {
    setPageNumbers([]);
    for (let i = startGroupPage; i <= endGroupPage; i++) {
      setPageNumbers(prev => [...prev, i]);
    }
  };

  useEffect(() => {
    if (currentPage % 4 === 1 || currentPage % 4 === 0) {
      updatePageGroup();
    }
  }, [currentPage]);

  // useEffect(() => {
  //   const newPageNumbers = [1, 2, 3, 4];
  //   newPageNumbers.length = pageLimit;
  //   console.log(newPageNumbers);
  //   setPageNumbers(newPageNumbers);
  //   updatePageGroup();
  // }, [totalPages]);

  return (
    <S.PaginationWrapper>
      <S.PaginationButton
        type="button"
        onClick={() => updatePageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <PaginationIcon turn="right" disabled={pageNumber === 1} />
      </S.PaginationButton>
      <S.NumberWrap>
        {pageNumbers.map(showNumber => {
          return (
            <S.PageNumberButton
              key={showNumber}
              selected={pageNumber === showNumber}
              onClick={() => updatePageNumber(showNumber)}
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
    </S.PaginationWrapper>
  );
};

export default PaginationController;
