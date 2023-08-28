import styled from '@emotion/styled';

export const ModalButton = styled.button<{ isConfirm: boolean }>`
  width: 26rem;
  height: 3rem;
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  border-radius: 0.625rem;
  gap: 0.625rem;
  background-color: ${props => (props.isConfirm ? '#E0E0E0' : '#2174d8')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
`;
