import styled from '@emotion/styled';

import device from 'shared/config';

export const InspectionPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ContentWrap = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  z-index: 5;
  @media ${device.mobile} {
    height: 230px;
    justify-content: start;
  }
`;

export const InspectionDesc = styled.p`
  font-weight: 500;
  font-size: 34px;
  color: #ffffff;
  @media ${device.mobile} {
    font-size: 24px;
    position: relative;
    bottom: 20px;
  }
`;

export const InspectionUnderBar = styled.div`
  width: 130px;
  border: 2px solid #fafafa;
  @media ${device.mobile} {
    width: 45px;
  }
`;

const Ball = styled.div`
  border-radius: 100%;
  position: absolute;
  z-index: -1;
`;

export const SkyBlueBall = styled(Ball)`
  width: 72px;
  height: 72px;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
  top: 42%;
  left: 44%;
  @media ${device.tablet} {
    width: 50px;
    height: 50px;
    top: 40%;
    left: 40%;
  }
  @media ${device.mobile} {
    width: 28px;
    height: 28px;
    top: 36%;
  }
`;

export const BlueBall = styled(Ball)`
  width: 75px;
  height: 75px;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
  @media ${device.tablet} {
    width: 52px;
    height: 52px;
  }
  @media ${device.mobile} {
    width: 28px;
    height: 28px;
  }
`;

export const GreenBall = styled(Ball)`
  width: 147px;
  height: 147px;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
  top: 60%;
  left: 65%;
  @media ${device.tablet} {
    width: 102px;
    height: 101px;
    top: 48%;
    left: 65%;
  }
  @media ${device.mobile} {
    width: 45px;
    height: 45px;
    top: 50%;
    left: 75%;
  }
`;
