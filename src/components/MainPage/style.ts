import styled from '@emotion/styled';

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
`;

export const TitleWrap = styled.div`
  width: 88%;
  height: 520px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 96px;
  line-height: 110px;
`;

export const Description = styled.p`
  width: 340px;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.66);
`;

export const ApplyBox = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ToApply = styled.a`
  width: 100%;
  height: 60px;
  display: block;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  :hover {
    transition: background 0.4s;
    background: #dbe44e;
  }
`;

export const ToApplyText = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #303030;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
`;

export const ContentSelect = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #d6d6d6;
  cursor: pointer;
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
`;

export const OrangeBall = styled(Ball)`
  width: 312px;
  height: 312px;
  background: linear-gradient(220deg, #e1da40 10.2%, #f29100 88.36%);
  filter: blur(10px);
  top: 1351px;
  left: 26%;
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
  filter: blur(10px);
  left: 54%;
  top: 1650px;
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
`;
