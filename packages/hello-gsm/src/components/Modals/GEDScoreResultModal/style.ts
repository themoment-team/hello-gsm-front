import styled from '@emotion/styled';
import { Semester, Subject } from 'shared/Styles/Calculate';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.66);
  z-index: 2;
  display: flex;
  flex-direction: column;
  hr {
    width: 46px;
    border-radius: 2px;
    border: 2px solid #bebebe;
  }
`;

export const ResultSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const SubjectSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ResultSubject = styled(Semester)``;

export const ResultTotal = styled(Subject)`
  width: 127px;
  height: 100%;
  margin: 0;
  line-height: 55px;
`;

export const Score = styled.div`
  width: 127px;
  height: 36px;
  background-color: #484453;
  border-radius: 6px;
  line-height: 36px;
  color: rgba(255, 255, 255, 0.61);
  text-align: center;
`;

export const MainDesc = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;
`;

export const SubDesc = styled.p`
  color: rgba(255, 255, 255, 0.69);
`;

export const Confirm = styled.button`
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
  border: none;
`;

export const ConfirmSection = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`;
