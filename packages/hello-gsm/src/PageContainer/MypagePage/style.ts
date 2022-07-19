import styled from '@emotion/styled';
import device from 'shared/config';

export const MyPage = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 100px;
`;

export const UserBox = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EmptiedProfile = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background: #ffffff;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.a`
  width: 160px;
  height: 45px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  color: #0f0921;
  cursor: pointer;
`;

export const IsNotPCWrap = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    height: 70px;
  }
`;

export const Point = styled.div`
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.87);
  border-radius: 100%;
`;

export const IsNotPC = styled.p`
  width: 260px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #bcbac1;
  @media ${device.mobile} {
    width: 230px;
    font-size: 18px;
    line-height: 26px;
  }
`;

export const Information = styled.div`
  width: 830px;
  height: 80px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InformationHeader = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
`;

export const InformationHeaderitem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  :nth-of-type(1) {
    width: 100px;
  }
  :nth-of-type(2) {
    width: 130px;
  }
  :nth-of-type(3) {
    width: 190px;
  }
  :nth-of-type(4) {
    width: 190px;
  }
  :nth-of-type(5) {
    width: 190px;
  }
`;

export const InformationBody = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const InformationBodyitem = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f0921;
  font-weight: 500;
  font-size: 18px;
  :nth-of-type(1) {
    font-weight: 700;
    width: 100px;
  }
  :nth-of-type(2) {
    width: 130px;
  }
  :nth-of-type(3) {
    width: 190px;
  }
  :nth-of-type(4) {
    width: 190px;
  }
  :nth-of-type(5) {
    width: 190px;
  }
`;

const Ball = styled.div`
  border-radius: 100%;
  z-index: -1;
  position: absolute;
  @media ${device.mobile} {
    display: none;
  }
`;

export const GreenBall = styled(Ball)`
  width: 253px;
  height: 253px;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
  top: 500px;
  left: 85%;
  @media ${device.tablet} {
    width: 130px;
    height: 130px;
    top: 680px;
    left: 91%;
  }
`;

export const BigBlueBall = styled(Ball)`
  width: 902px;
  height: 902px;
  background: linear-gradient(
    201.42deg,
    #7be8ff 13.47%,
    #3f98ff 33.16%,
    rgba(0, 33, 65, 0.68) 80.28%
  );
  bottom: -500px;
  left: -300px;
  @media ${device.tablet} {
    width: 462px;
    height: 462px;
    top: 777px;
    right: 90%;
  }
`;

export const MiddleBlueBall = styled(Ball)`
  width: 162px;
  height: 162px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 830px;
  left: 75%;
  @media ${device.tablet} {
    width: 83px;
    height: 83px;
    top: 854px;
    left: 70%;
  }
`;

export const SmallBlueBall = styled(Ball)`
  width: 75px;
  height: 75px;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
  top: 850px;
  left: 90%;
  @media ${device.tablet} {
    width: 38px;
    height: 38px;
    top: 868px;
    left: 97%;
  }
`;
