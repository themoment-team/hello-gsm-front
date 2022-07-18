import styled from '@emotion/styled';

export const ScoreModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const ScoreModalBox = styled.div`
  width: 630px;
  height: 420px;
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScoreModalContent = styled.div`
  width: 550px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ScoreWrap = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ScoreInput = styled.input`
  width: 100%;
  height: 65px;
  background: rgba(209, 209, 209, 0.49);
  border-radius: 20px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #6d6d6d;
  ::placeholder {
    color: #888888;
    font-weight: 400;
    font-size: 24px;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const ButtonWrap = styled.div`
  width: 550px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 265px;
  height: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 17px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Cancel = styled(Button)`
  background: #ff4747;
`;

export const Confirm = styled(Button)`
  background: #19baff;
`;
