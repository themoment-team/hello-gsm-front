import styled from '@emotion/styled';
import device from 'shared/config';

export const InspectionPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrap = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
`;

export const InspectionDesc = styled.p`
  font-weight: 500;
  font-size: 34px;
  color: #ffffff;
`;

export const InspectionUnderBar = styled.div`
  width: 130px;
  border: 2px solid #fafafa;
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
`;
