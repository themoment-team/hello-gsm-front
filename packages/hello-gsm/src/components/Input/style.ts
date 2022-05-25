import styled from '@emotion/styled';

export const Input = styled.input`
  height: 55px;
  background-color: #484453;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 32px;
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
