import styled from '@emotion/styled';

export const Input = styled.input`
  height: 55px;
  background: #484453;
  box-sizing: border-box;
  padding: 0 24px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  border-radius: 6px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.43);
  }
  :focus {
    outline: none;
  }

  margin-bottom: 50px;
  :nth-child(3) {
    margin-bottom: 21px;
  }
`;
