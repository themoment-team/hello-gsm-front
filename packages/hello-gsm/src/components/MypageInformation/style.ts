import styled from '@emotion/styled';

export const Information = styled.div`
  width: 45.625rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InformationHeader = styled.div`
  height: 1.5625rem;
  display: flex;
  justify-content: space-between;
`;

export const InformationHeaderitem = styled.div`
  width: 11.875rem;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.125rem;
  :nth-of-type(1) {
    width: 8.125rem;
  }
`;

export const InformationBody = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const InformationBodyitem = styled.div`
  width: 11.875rem;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f0921;
  font-weight: 500;
  font-size: 1.125rem;
  :nth-of-type(1) {
    width: 8.125rem;
  }
`;
