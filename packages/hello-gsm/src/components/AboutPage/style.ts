import styled from '@emotion/styled';
import device from 'shared/config';

export const AboutPage = styled.div`
  position: relative;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25vh 0 42vh;
  overflow: hidden;

  svg {
    width: 22vh;
    height: 22vh;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 87px;
`;

export const Desc = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.64);
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  margin-top: 400px;
  @media ${device.laptop} {
    margin-top: 200px;
  }
  @media ${device.mobile} {
    font-size: 24px;
  }
`;

export const WheelPicker = styled.div`
  width: 70vw;
  margin: 240px 120px 60px 0;
  @media ${device.laptop} {
    margin: 100px 0 0 0;
    width: 100%;
  }
`;

export const PickerText = styled.div`
  width: 800px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  margin-bottom: 30px;
  :nth-of-type(1) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) -62.5%,
      rgba(255, 255, 255, 0.7) 193.42%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  :nth-of-type(2) {
    background-color: #ffffff;
    margin-left: 70px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  :nth-of-type(3) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.48) 0%,
      rgba(255, 255, 255, 0) 117.99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.laptop} {
    text-align: center;
    font-size: 40px;
    line-height: 60px;
    :nth-of-type(2) {
      margin-left: 0px;
    }
  }
  @media ${device.mobile} {
    font-size: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 0px 4vw;
  margin-top: 70px;
  :nth-of-type(1) {
    margin-top: 160px;
  }
  @media ${device.laptop} {
    flex-direction: column;
    gap: 140px;
    margin-top: 140px;
  }
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  hr {
    width: 54px;
  }
`;

export const TeamTitle = styled.p`
  display: inline-block;
  border-bottom: 1px solid #ffffff;
  margin: 0 auto;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  line-height: 50px;
  .DevOps {
    color: #edff21;
  }
  .Operating {
    color: #3aa2ff;
  }
  .Design {
    color: #88d7ff;
  }
  .FrontEnd {
    color: #5ae6cc;
  }
  .BackEnd {
    color: #7be449;
  }
`;

export const TeamSubTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 32px;
  padding: 5px 0;
  color: #ffffff;
`;

export const ProfileSection = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  a {
    margin: 0 20px;
  }
  p {
    text-align: center;
    line-height: 64px;
  }
`;

const Ball = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  @media ${device.laptop} {
    display: none;
  }
`;

export const BigBall = styled(Ball)`
  width: 57vh;
  height: 57vh;
  top: 54vh;
  background: linear-gradient(
    198.09deg,
    #7be7ff 14.23%,
    #3290ff 30.3%,
    rgba(0, 33, 65, 0.63) 90.22%
  );
  box-shadow: -12px -12px 24px rgba(0, 0, 0, 0.25);
`;

export const GreenBall = styled(Ball)`
  width: 8vh;
  height: 8vh;
  top: 46vh;
  background: linear-gradient(
    202.92deg,
    #fcffc0 7.76%,
    #f7ff5f 32.18%,
    #d0da44 60.66%,
    #70a52e 90.6%
  );
  box-shadow: 4px 4px 31px rgba(0, 0, 0, 0.25);
`;

export const SkyBlueBall = styled(Ball)`
  width: 25vh;
  height: 25vh;
  right: -10vh;
  top: 55vh;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;

export const SmallBall = styled(Ball)`
  width: 5vh;
  height: 5vh;
  left: 32vh;
  top: 51vh;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;
