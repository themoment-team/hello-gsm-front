import styled from '@emotion/styled';

export const InputTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #9e9e9e;
`;
export const ModalInput = styled.div`
  width: 416px;
  height: 72px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const Input = styled.input`
  color: #9e9e9e;
  display: flex;
  width: 416px;
  padding: 12px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--grey-050, #e0e0e0);
  outline: none;
  transition: all 100ms;
  &:focus {
    border: 1px solid #2174d8;
  }
`;
