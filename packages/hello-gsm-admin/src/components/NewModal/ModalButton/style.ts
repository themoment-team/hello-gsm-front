import styled from '@emotion/styled';

export const ModalButton = styled.button<{ isConfirm: boolean }>`
  width: 416px;
  height: 48px;
  padding: 8px 20px 8px 20px;
  border-radius: 10px;
  gap: 10px;
  background-color: ${props => (props.isConfirm ? '#E0E0E0' : '#2174d8')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;
