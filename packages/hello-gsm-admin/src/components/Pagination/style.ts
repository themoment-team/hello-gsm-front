import styled from '@emotion/styled';

export const Test = styled.div`
  width: fit-content;
  height: 25px;
  background-color: red;
  margin: 0 auto;
  display: flex;
  gap: 16px;
`;

export const NumberWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
