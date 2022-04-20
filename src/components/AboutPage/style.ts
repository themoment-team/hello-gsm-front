import styled from '@emotion/styled';

export const AboutPage = styled.div`
  position: relative;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 280px 0 440px;
  overflow: hidden;

  svg {
    width: 255px;
    height: 255px;
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
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  margin-top: 380px;
`;

export const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WheelPicker = styled.div`
  margin: 240px 120px 60px 0;
`;

export const PickerText = styled.div`
  width: 800px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -62.5%,
    rgba(255, 255, 255, 0.48) 193.42%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  :nth-child(2) {
    background-color: #ffffff;
    margin-left: 70px;
  }
`;

export const TeamSection = styled.div`
  margin-top: 160px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin-bottom: 70px;
`;

export const TeamTitle = styled.p`
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
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  line-height: 32px;
  padding: 5px 0;
  color: #ffffff;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  width: 300px;
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  margin-top: 60px;
`;

export const Profile = styled.div`
  display: inline-block;
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  margin: 0 10px;
  p {
    text-align: center;
    line-height: 64px;
  }
`;

export const BigBall = styled.div`
  position: absolute;
  width: 57vh;
  height: 57vh;
  left: -275px;
  top: 605px;
  border-radius: 50%;
  background: linear-gradient(
    198.09deg,
    #7be7ff 14.23%,
    #3290ff 30.3%,
    rgba(0, 33, 65, 0.63) 90.22%
  );
  box-shadow: -12px -12px 24px rgba(0, 0, 0, 0.25);
`;

export const GreenBall = styled.div`
  position: absolute;
  width: 8vh;
  height: 8vh;
  left: 214px;
  top: 47vh;
  border-radius: 50%;
  background: linear-gradient(
    202.92deg,
    #fcffc0 7.76%,
    #f7ff5f 32.18%,
    #d0da44 60.66%,
    #70a52e 90.6%
  );
  box-shadow: 4px 4px 31px rgba(0, 0, 0, 0.25);
`;

export const SkyBlueBall = styled.div`
  position: absolute;
  width: 25vh;
  height: 25vh;
  left: 1700px;
  top: 61vh;
  border-radius: 50%;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;

export const SmallBall = styled.div`
  position: absolute;
  width: 5vh;
  height: 5vh;
  left: 363px;
  top: 51vh;
  border-radius: 50%;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;
