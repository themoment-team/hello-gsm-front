import styled from '@emotion/styled';

export const PassModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const PassModalBox = styled.div`
  width: 630px;
  height: 300px;
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PassModalContent = styled.div`
  width: 550px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Fail = styled(Button)`
  background: #ff4747;
`;

export const Pass = styled(Button)`
  background: #19baff;
`;
