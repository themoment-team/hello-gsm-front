import styled from '@emotion/styled';

export const NotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 35vh;
  text-align: center;
  color: #ffffff;
`;

export const SkyBlueBall = styled.div`
  position: absolute;
  z-index: -1;
  width: 6vh;
  height: 6vh;
  right: 53vw;
  top: 30vh;
  border-radius: 50%;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;

export const GreenBall = styled.div`
  position: absolute;
  width: 13vh;
  height: 13vh;
  right: 30vw;
  top: 50vh;
  border-radius: 50%;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
  z-index: -1;
`;

export const BlueBall = styled.div`
  position: absolute;
  z-index: -1;
  width: 6vh;
  height: 6vh;
  right: 70vw;
  top: 51vh;
  border-radius: 50%;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
`;
