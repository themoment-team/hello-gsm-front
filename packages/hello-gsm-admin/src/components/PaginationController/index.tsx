import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PaginationIcon from 'Assets/svg/PaginationIcon';

import * as S from './style';

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

  const pageLimit = totalPages < 4 ? totalPages : 4;
  const currentPage = pageNumber;
  const currentPageGroup = Math.ceil(currentPage / pageLimit);
  const startGroupPage = (currentPageGroup - 1) * pageLimit + 1;
  const endGroupPage = currentPageGroup * pageLimit;

  if (pageNumber > totalPages || pageNumber === 0) {
    router.push(`${pathName}?pageNumber=1`);
  }

  const updatePageGroup = () => {
    setPageNumbers([]);
    for (let i = startGroupPage; i <= endGroupPage && i <= totalPages; i++)
      setPageNumbers(prev => [...prev, i]);
  };

  useEffect(() => {
    if (currentPage % 4 === 1 || currentPage % 4 === 0) {
      updatePageGroup();
    }
  }, [currentPage]);

  useEffect(() => {
    const newPageNumbers = [1, 2, 3, 4];
    newPageNumbers.length = pageLimit;
    setPageNumbers(newPageNumbers);
    updatePageGroup();
  }, [pageLimit]);

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
        {pageNumbers.map(showNumber => (
          <S.PageNumberButton
            key={showNumber}
            selected={pageNumber === showNumber}
            onClick={() => updatePageNumber(showNumber)}
          >
            {showNumber}
          </S.PageNumberButton>
        ))}
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
