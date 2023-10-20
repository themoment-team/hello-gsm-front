import styled from '@emotion/styled';
import device from 'shared/config';

export const MainResultModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;
`;

export const MainResultModalBox = styled.div`
  width: 710px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 710px) {
    width: 90%;
  }
  @media ${device.mobile} {
    width: 95%;
    height: 300px;
  }
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
  @media ${device.mobile} {
    font-size: 15px;
    line-height: 23px;
  }
`;

export const PassText = styled.span`
  color: #3796ff;
`;

export const FailText = styled.span`
  color: #fa4953;
`;

export const FinalPassPostScript = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #0f0921;
  margin-top: 10px;
  @media ${device.mobile} {
    font-weight: 400;
    font-size: 11.5px;
    line-height: 19px;
  }
`;

export const PostScript = styled.p`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  color: rgba(39, 39, 39, 0.64);
  text-align: center;
  @media ${device.mobile} {
    margin-top: 5px;
    font-size: 13px;
    line-height: 19px;
  }
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
  @media ${device.mobile} {
    width: 125px;
    font-size: 13px;
  }
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background: #c9c9c9;
    border-radius: 4px;
    @media ${device.mobile} {
      width: 12px;
      height: 12px;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    width: 305px;
  }
  @media (max-width: 310px) {
    width: 280px;
    button {
      width: 136px;
    }
  } ;
`;

export const Button = styled.button`
  width: 155px;
  height: 45px;
  background: #42bafe;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    width: 148px;
    height: 37px;
    font-size: 16px;
  }
`;

export const ButtonText = styled.span`
  color: #0f0921;
  margin-left: 5px;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #0f0921;

  span {
    color: #fb1834;
  }
`;
