import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
`;

export const HeaderElement = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #f8f8f8;
  text-align: center;
  :nth-of-type(4) {
    width: 140px;
  }
  :nth-of-type(9) {
    width: 40px;
  }
  :nth-of-type(10) {
    width: 40px;
  }
`;
