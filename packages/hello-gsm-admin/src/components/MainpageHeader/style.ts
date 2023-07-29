import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderElement = styled.div`
  width: 100px;
  font-weight: 700;
  font-size: 20px;
  color: #f8f8f8;
  text-align: center;
  :nth-of-type(5) {
    width: 190px;
  }
  :nth-of-type(2) {
    width: 90px;
  }
  :nth-of-type(n + 6):nth-of-type(-n + 8) {
    width: 190px;
  }
  :nth-of-type(n + 9) {
    width: 91px;
  }
`;
