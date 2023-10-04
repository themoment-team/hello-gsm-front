import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  width: fit-content;
  height: 25px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const NumberWrap = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationButton = styled.button`
  display: flex;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
