import styled from '@emotion/styled';
import device from 'shared/config';

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
  @media ${device.tablet} {
    width: 87%;
    height: 650px;
  }
  @media ${device.mobile} {
    height: 415px;
  }
`;

export const CloseButtonWrap = styled.div`
  width: 87.5%;
  display: flex;
  justify-content: flex-end;
  z-index: 5;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  @media ${device.mobile} {
    svg {
      width: 6px;
    }
  }
`;

export const ContentBox = styled.div`
  width: 87.5%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    height: 87.5%;
  }
`;

export const QuestionBox = styled.div`
  width: 100%;
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    height: 50px;
    svg {
      width: 67px;
    }
  }
`;

export const QuestionTitle = styled.div`
  width: 71%;
  height: 100%;
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.12),
    1px -1px 9px rgba(170, 170, 170, 0.13);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitleContent = styled.p`
  width: 80%;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 35px;
  &::before {
    content: 'Q. ';
    color: #42bafe;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.mobile} {
    font-size: 11px;
    line-height: 16px;
  }
`;

export const AnswerBox = styled.div`
  width: 100%;
  height: 400px;
  background: #e6e6e6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    height: 60%;
  }
  @media ${device.mobile} {
    height: 75%;
  }
`;

export const AnswerContent = styled.div`
  width: 88.5%;
  height: 370px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    height: 92.5%;
  }
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
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.mobile} {
    width: 35px;
    height: 20px;
    font-size: 11px;
    line-height: 20px;
  }
`;

export const AnswerBody = styled.div`
  width: 100%;
  height: 300px;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  color: #525252;
  @media ${device.tablet} {
    font-size: 17px;
    height: 80%;
  }
  @media ${device.mobile} {
    height: 85%;
    font-size: 11px;
    line-height: normal;
  }
`;
