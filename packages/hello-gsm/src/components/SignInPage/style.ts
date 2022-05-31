import styled from '@emotion/styled';
import device from 'shared/config';

export const SignInPage = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: #ffffff;
  border-bottom: 1px solid #fff;
  margin-bottom: 30px;
`;

export const SignInBtn = styled.button`
  display: flex;
  align-items: center;
  width: 328px;
  height: 45px;
  background: #fee500;
  border-radius: 10px;
  cursor: pointer;
  color: #0f0921;
  font-size: 20px;
  border: none;
  p {
    text-align: center;
    line-height: 45px;
  }
  svg {
    width: 25px;
    height: 45px;
    margin: 0 60px 0 20px;
  }
`;

const Ball = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BigBall = styled(Ball)`
  width: 93vh;
  height: 93vh;
  left: -30vh;
  top: 43vh;
  background: linear-gradient(
    201.42deg,
    #7be8ff 13.47%,
    #3f98ff 33.16%,
    rgba(0, 33, 65, 0.68) 80.28%
  );
`;

export const SmallBall = styled(Ball)`
  width: 25vh;
  height: 25vh;
  right: -5vh;
  top: 77vh;
  background: linear-gradient(
    207.52deg,
    #d2f7ff 13.95%,
    #61c5db 37.16%,
    rgba(0, 132, 201, 0.27) 91.31%
  );
`;
