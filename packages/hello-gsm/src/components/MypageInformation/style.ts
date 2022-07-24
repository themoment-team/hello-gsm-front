import styled from '@emotion/styled';

export const Information = styled.div`
  width: 830px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InformationHeader = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
`;

export const InformationHeaderitem = styled.div`
  width: 190px;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  :nth-of-type(1) {
    width: 100px;
  }
  :nth-of-type(2) {
    width: 130px;
  }
`;

export const InformationBody = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const InformationBodyitem = styled.div`
  width: 190px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f0921;
  font-weight: 500;
  font-size: 18px;
  :nth-of-type(1) {
    font-weight: 700;
    width: 100px;
  }
  :nth-of-type(2) {
    width: 130px;
  }
`;
