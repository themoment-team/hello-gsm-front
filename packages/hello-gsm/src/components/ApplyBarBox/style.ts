import styled from '@emotion/styled';

export const BarBox = styled.div`
  width: 200px;
  height: 2400px;
  border-right: 3px solid rgba(255, 255, 255, 0.17);
`;

export const BarElement = styled.p`
  color: #f8f8f8;
  font-weight: 400;
  font-size: 20px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &::after {
    content: '';
    background: #f8f8f8;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    left: 6.5px;
    margin-left: 15px;
  }
  :nth-of-type(1) {
    top: 100px;
  }
  :nth-of-type(2) {
    top: 410px;
  }
  :nth-of-type(3) {
    top: 500px;
  }
  :nth-of-type(4) {
    top: 580px;
  }
  :nth-of-type(5) {
    top: 665px;
  }
  :nth-of-type(6) {
    top: 865px;
  }
  :nth-of-type(7) {
    top: 920px;
  }
  :nth-of-type(8) {
    top: 1110px;
  }
  :nth-of-type(9) {
    top: 1190px;
  }
  :nth-of-type(10) {
    top: 1250px;
  }
  :nth-of-type(11) {
    top: 1330px;
  }
  :nth-of-type(12) {
    top: 1540px;
  }
  :nth-of-type(13) {
    top: 1625px;
  }
  :nth-of-type(14) {
    top: 1710px;
  }
  :nth-of-type(15) {
    top: 1900px;
  }
  :nth-of-type(16) {
    top: 1980px;
  }
`;
