import styled from '@emotion/styled';
import device from 'shared/config';

export const MainPage = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const MainContent = styled.div`
  height: 1700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 300px;
  margin-top: 230px;
  @media ${device.tablet} {
    height: 1300px;
    margin-top: 100px;
    margin-bottom: 200px;
  }
  @media ${device.mobile} {
    height: 900px;
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;

export const TitleWrap = styled.div`
  width: 88%;
  height: 520px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.laptop} {
    align-items: center;
  }
  @media ${device.mobile} {
    height: 400px;
  }
  @media (max-width: 430px) {
    height: 350px;
  }
`;

export const TitleBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.laptop} {
    align-items: center;
    text-align: center;
  }
  @media ${device.mobile} {
    height: 230px;
  }
  @media (max-width: 430px) {
    height: 180px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 96px;
  line-height: 110px;
  @media (max-width: 805px) {
    font-size: 75px;
  }
  @media ${device.mobile} {
    font-size: 50px;
    line-height: 64px;
  }
  @media (max-width: 430px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Description = styled.p`
  width: 340px;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.66);
  @media (max-width: 430px) {
    width: 280px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ApplyBox = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${device.laptop} {
    width: 350px;
  }
  @media ${device.mobile} {
    width: 240px;
  }
`;

export const ToApply = styled.a`
  width: 100%;
  height: 60px;
  display: block;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  color: #303030;
  background: #dbe44e;
  box-shadow: 0px 5px 20px 0px #dbe44e;
  :hover {
    transition: box-shadow 0.5s;
    box-shadow: 0px 0px 50px 0px #dbe44e;
  }
  @media ${device.tablet} {
    color: #2c2a34;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
  @media ${device.mobile} {
    height: 43px;
  }
`;

export const ApplyTerm = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

export const Underline = styled.div`
  width: 55px;
  border: 2px solid #ffffff;
`;

export const ContentBox = styled.div`
  width: 80%;
  height: 800px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(48px);
  margin: 0 auto;
  border-radius: 24px;
  position: relative;
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 95%;
    height: 550px;
  }
  @media ${device.mobile} {
    height: 350px;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;
  @media ${device.mobile} {
    height: 90px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
  }
`;

export const ContentHeaderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ContentSelect = styled.button`
  font-weight: 400;
  font-size: 20px;
  color: #d6d6d6;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0 18.745px;
  margin: 0;
  @media ${device.tablet} {
    font-size: 18px;
    padding: 0 16.87px;
  }
  @media ${device.mobile} {
    font-size: 11px;
    padding: 0 10.125px;
  }
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
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
  top: 200px;
  right: 23%;
  @media ${device.tablet} {
    width: 80px;
    height: 80px;
    top: 720px;
    right: 24%;
  }
  @media ${device.mobile} {
    width: 66px;
    height: 66px;
    top: 330px;
    left: 90%;
  }
`;

export const BigBlueBall = styled(Ball)`
  width: 1037px;
  height: 1037px;
  background: linear-gradient(
    198.09deg,
    #7be7ff 14.23%,
    #3290ff 30.3%,
    rgba(0, 33, 65, 0.63) 90.22%
  );
  box-shadow: -12px -12px 24px rgba(0, 0, 0, 0.25);
  top: 450px;
  left: 67%;
  @media ${device.tablet} {
    width: 331px;
    height: 331px;
    top: 728px;
    left: 78%;
  }
  @media ${device.mobile} {
    width: 276px;
    height: 276px;
    top: 477px;
    left: 80%;
  }
`;

export const YellowBall = styled(Ball)`
  width: 136px;
  height: 136px;
  background: linear-gradient(
    202.92deg,
    #fcffc0 7.76%,
    #f7ff5f 32.18%,
    #d0da44 60.66%,
    #70a52e 90.6%
  );
  box-shadow: 4px 4px 31px rgba(0, 0, 0, 0.25);
  top: 1350px;
  left: 88%;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    width: 127px;
    height: 127px;
    top: 935px;
    left: 5%;
  }
`;

export const OrangeBall = styled(Ball)`
  width: 312px;
  height: 312px;
  background: linear-gradient(220deg, #e1da40 10.2%, #f29100 88.36%);
  top: 1351px;
  left: 26%;
  @media ${device.tablet} {
    width: 118px;
    height: 118px;
    top: 1100px;
  }
  @media ${device.mobile} {
    top: 700px;
  }
`;

export const SmallBlueBall = styled(Ball)`
  width: 227px;
  height: 227px;
  background: linear-gradient(
    220deg,
    #5da7ff 10.2%,
    #0081ff 41.79%,
    #00366b 88.36%
  );
  left: 54%;
  top: 1650px;
  @media ${device.tablet} {
    width: 86px;
    height: 86px;
    top: 1188px;
  }
  @media ${device.mobile} {
    width: 93px;
    height: 93px;
    top: 880px;
    left: 90%;
  }
`;

export const MintBall = styled(Ball)`
  width: 481px;
  height: 481px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 1750px;
  left: -70px;
  @media ${device.tablet} {
    width: 225px;
    height: 225px;
    top: 1351px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const NanoBlueBall = styled(Ball)`
  width: 99px;
  height: 99px;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #339aff 24.7%,
    #004891 88.36%
  );
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
  top: 2000px;
  left: 24%;
  @media ${device.tablet} {
    width: 66px;
    height: 66px;
    top: 1450px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
