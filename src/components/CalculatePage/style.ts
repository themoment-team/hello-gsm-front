import styled from '@emotion/styled';

export const CalculatePage = styled.div`
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
`;

export const LineList = styled.div`
  width: 150px;
  margin-right: 30px;
  padding-top: 140px;
`;

export const Line = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  display: block;
  &::after {
    display: block;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png);
    position: relative;
    background-size: 10px 10px;
    left: 180px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
  }

  :nth-child(2) {
    margin: 70px 0 0;
  }
  :nth-child(3) {
    margin: 65px 0 0;
  }
`;
