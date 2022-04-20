import styled from '@emotion/styled';

export const SchoolPage = styled.div`
  margin-top: 70px;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 1000px;
`;

export const SchoolName = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
`;

export const VideoBox = styled.div`
  width: 69%;
  height: 35vw;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(48px);
`;

export const ToHomepage = styled.div`
  width: 281px;
  height: 63px;
  border: 1px solid #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LinkText = styled.a`
  font-weight: 700;
  font-size: 22px;
`;

export const Section2 = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnterpriseWrap = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
`;

export const Enterprise = styled.div`
  width: 170px;
  height: 50px;
  border-radius: 17px;
  background: #ffffff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Section3 = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 200px;
`;

export const Section3Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

export const GraphWrap = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectBar = styled.div`
  height: 500px;
  border: 3px solid #9a9a9a;
`;

export const GraphBox = styled.div`
  width: 500px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

export const Graph = styled.div`
  width: 100%;
  width: 500px;
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const GreenBall = styled(Ball)`
  width: 176px;
  height: 177px;
  background: linear-gradient(
    220deg,
    #faffa4 10.2%,
    #e6ef54 32.84%,
    #2a3409 88.36%
  );
  top: 400px;
  left: 59%;
`;

export const BlueBall = styled(Ball)`
  width: 110px;
  height: 110px;
  background: linear-gradient(
    220deg,
    #7be8ff 10.2%,
    #3b8ef0 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 900px;
  left: 82%;
`;

export const SkyBlueBall = styled(Ball)`
  width: 283px;
  height: 283px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 800px;
  left: 6%;
`;

export const SmallBlueBall = styled(Ball)`
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
  left: 8%;
`;
