import styled from '@emotion/styled';

export const BrowserPage = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 20px;
    color: white;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
  }
`;

const Ball = styled.div`
  position: absolute;
  z-index: -1;
  border-radius: 50%;
`;

export const SkyBlueBall = styled(Ball)`
  width: 6vh;
  height: 6vh;
  right: 53vw;
  top: 30vh;
  background: linear-gradient(
    220deg,
    #9cddff 10.2%,
    #48afe4 32.84%,
    rgba(0, 51, 77, 0.51) 88.36%
  );
`;

export const GreenBall = styled(Ball)`
  width: 13vh;
  height: 13vh;
  right: 30vw;
  top: 50vh;
  background: linear-gradient(
    207.52deg,
    #fcffad 13.95%,
    #dee449 27.08%,
    rgba(48, 95, 2, 0.57) 91.31%
  );
`;

export const BlueBall = styled(Ball)`
  width: 6vh;
  height: 6vh;
  right: 70vw;
  top: 51vh;

  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
`;
