import styled from '@emotion/styled';

export const ChoosePage = styled.div`
  height: calc(100vh - 4.375rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const ChooseTitle = styled.h1`
  color: white;
  font-size: 1.875rem;
`;

export const ChooseSection = styled.div`
  display: flex;
  width: 31.25rem;
  height: 17.5rem;
  justify-content: space-between;
`;

export const ChooseButton = styled.button`
  width: 30%;
  height: 3.8125rem;
  background-color: #484453;
  color: rgba(255, 255, 255, 0.45);
  border-radius: 0.375rem;
  line-height: 3.8125rem;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
`;
