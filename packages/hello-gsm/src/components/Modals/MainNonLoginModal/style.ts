import styled from '@emotion/styled';

export const MainResultModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const MainResultModalBox = styled.div`
  width: 710px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainResultModalContent = styled.div`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #0f0921;
`;

export const InvisibleButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const InvisibleButton = styled.button`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  background: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background: #c9c9c9;
    border-radius: 4px;
  }
`;

export const ConfirmButton = styled.button`
  width: 155px;
  height: 45px;
  background: #42bafe;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
