import styled from '@emotion/styled';

export const PrintButton = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  gap: 2px;
  border-radius: 10px;
  background: #2174d8;
  align-items: center;
  cursor: pointer;
  border: 0;

  &:hover {
    background: #d6e8ff;
    span {
      color: #2174d8;
    }
    path {
      fill: #2174d8;
    }
    #x {
      fill: #d6e8ff;
    }
    transition: ease-in-out 0.2s;
  }

  &:disabled {
    background: #e0e0e0;
    span {
      color: #9e9e9e;
    }
    path {
      fill: #9e9e9e;
    }
    #x {
      fill: #e0e0e0;
    }
  }
`;

export const PrintText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
