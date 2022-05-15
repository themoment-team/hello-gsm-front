import styled from '@emotion/styled';

export const FAQModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const FAQModalBox = styled.div`
  width: 800px;
  height: 800px;
  background-color: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  width: 700px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuestionBox = styled.div`
  width: 700px;
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTitle = styled.div`
  width: 500px;
  height: 100px;
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.12),
    1px -1px 9px rgba(170, 170, 170, 0.13);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitleContent = styled.p`
  width: 390px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 35px;
  &::before {
    content: 'Q. ';
    color: #42bafe;
  }
`;

export const AnswerBox = styled.div`
  width: 700px;
  height: 400px;
  background: #e6e6e6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const AnswerContent = styled.div`
  width: 620px;
  height: 320px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AnswerHeader = styled.div`
  width: 70px;
  height: 40px;
  background: #ffffff;
  font-size: 24px;
  color: #2d9bd9;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  border-radius: 16px;
`;

export const AnswerBody = styled.div`
  width: 620px;
  height: 250px;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  color: #525252;
`;
