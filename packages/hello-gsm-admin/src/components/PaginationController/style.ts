import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  width: fit-content;
  height: 1.5625rem;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const NumberWrap = styled.div`
  width: 8.125rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6394rem;
`;

export const PaginationButton = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  :disabled {
    cursor: default;
  }
`;

export const PageNumberButton = styled.button<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#000000' : '#9E9E9E')};
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;
