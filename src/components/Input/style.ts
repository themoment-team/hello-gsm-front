import styled from '@emotion/styled';

export const Input = styled.input`
  height: 50px;
  background: rgba(255, 255, 255, 0.27);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 32px;
  margin-bottom: 10px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.43);
  }
  :focus {
    outline: none;
  }
`;
