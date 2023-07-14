import styled from '@emotion/styled';

export const ChoosePage = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ChooseTitle = styled.h1`
  color: white;
  font-size: 1.875rem;
`;

export const ChooseSection = styled.div`
  display: flex;
  width: 500px;
  height: 280px;
  justify-content: space-between;
`;

export const ChooseButton = styled.button`
  width: 30%;
  height: 61px;
  background-color: #484453;
  color: rgba(255, 255, 255, 0.45);
  border-radius: 6px;
  line-height: 61px;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
