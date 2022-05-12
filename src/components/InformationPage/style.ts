import styled from '@emotion/styled';

export const InformationPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationBox = styled.div`
  width: 850px;
  height: 420px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`;

export const Title = styled.div`
  width: 170px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  color: #0f0921;
  font-weight: 700;
  font-size: 20px;
  border-radius: 17px;
`;

export const Point = styled.div`
  width: 15px;
  height: 15px;
  background: #19baff;
  border-radius: 100%;
  position: relative;
  bottom: 17px;
  z-index: 3;
`;

export const Content = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
  background: #f3f3f3;
  font-weight: 700;
  font-size: 24px;
  color: #0f0921;
  text-align: center;
  border-radius: 43px;
`;
