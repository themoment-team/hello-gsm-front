import styled from '@emotion/styled';

export const InformationPage = styled.div`
  height: calc(100vh - 4.375rem);
  position: relative;
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 4px solid #0f0921;
    height: 56px;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #cbcbcb;
  }
`;

export const InformationContent = styled.div`
  width: 850px;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-height: 850px) {
    position: static;
    transform: none;
    margin: 50px auto;
  }
`;

export const InformationHeader = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
`;

export const ProgressBox = styled.div`
  width: 100%;
  height: 46px;
  position: relative;
`;

export const ProgressContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Progress = styled.div`
  width: 120px;
  height: 32px;
  background: #4d4957;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ProgressText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ebebeb;
`;

export const ProgressBar = styled.div`
  width: 100%;
  border: 2px solid #74707e;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -3;
`;

export const Point = styled.div`
  width: 7px;
  height: 7px;
  background: #c8c8c8;
  border-radius: 100%;
  position: absolute;
  top: 28px;
  z-index: 3;
`;

export const ControllerBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`;

const Controller = styled.button`
  width: 175px;
  height: 50px;
  font-weight: 700;
  font-size: 20px;
  color: #101010;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const PrevController = styled(Controller)`
  background: #19baff;
  box-shadow: 0px 15px 30px -15px #19baff;
`;

export const NextController = styled(Controller)`
  background: #dbe44e;
  box-shadow: 0px 15px 30px -15px #dbe44e;
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const YellowBall = styled(Ball)`
  width: 154px;
  height: 154px;
  background: linear-gradient(
    207.52deg,
    rgba(252, 255, 173, 0.9) 13.95%,
    rgba(222, 228, 73, 0.9) 27.08%,
    rgba(48, 95, 2, 0.513) 91.31%
  );
  left: 14%;
  top: 46%;
`;

export const BlueBall = styled(Ball)`
  width: 459px;
  height: 459px;
  background: linear-gradient(
    207.52deg,
    rgba(93, 196, 255, 0.9) 13.95%,
    rgba(41, 120, 214, 0.9) 37.16%,
    rgba(10, 36, 74, 0.9) 91.31%
  );
  top: 40%;
  left: 84%;
`;

export const SmallBlueBall = styled(BlueBall)`
  width: 75px;
  height: 75px;
  top: 90%;
  left: 22.5%;
`;
