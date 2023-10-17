import styled from '@emotion/styled';

export const MypageModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export const MypageModalBox = styled.div`
  width: 800px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 40px;
  position: fixed;
  top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ExplanationBox = styled.div`
  width: 700px;
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExplanationTitle = styled.div`
  width: 500px;
  height: 100px;
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.12),
    1px -1px 9px rgba(170, 170, 170, 0.13);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExplanationTitleContent = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 35px;
`;

export const RedHighlighting = styled.span`
  color: red;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const Button = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  background: #adadad;
`;

export const AllowButton = styled(Button)`
  background: #42bafe;
`;
