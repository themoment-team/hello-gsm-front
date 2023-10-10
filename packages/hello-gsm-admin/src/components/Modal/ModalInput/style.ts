import styled from '@emotion/styled';

export const InputTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem;
  color: #9e9e9e;
`;

export const ModalInput = styled.div`
  width: 26rem;
  height: 12.625rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

export const Input = styled.input`
  display: flex;
  width: 26rem;
  padding: 0.75rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #e0e0e0;
  outline: none;
  transition: all 100ms;
  &:focus {
    border: 0.0625rem solid #2174d8;
  }
`;
