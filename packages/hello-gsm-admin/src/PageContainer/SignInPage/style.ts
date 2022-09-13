import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SignInPage = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: #ffffff;
  border-bottom: 1px solid #fff;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  height: 50px;
  background: rgba(255, 255, 255, 0.27);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 32px;
  margin-bottom: 10px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  width: 328px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.43);
  }
  :focus {
    outline: none;
  }
`;

export const Error = styled.p`
  color: red;
  margin-bottom: 10px;
  margin-right: auto;
`;

export const shake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }                 
`;

export const Submit = styled.button`
  width: 328px;
  height: 45px;
  border-radius: 10px;
  background: #ffffff;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  color: #000000;
  cursor: pointer;
  margin: 17px 0 26px;
  border: none;
`;

export const Forget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  a {
    text-decoration: none;
    color: #dee449;
  }
`;

export const SignUp = styled.a`
  display: block;
  width: 72px;
  border-top: 1px solid #ffffff;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
`;

export const BigBall = styled.div`
  position: absolute;
  width: 93vh;
  height: 93vh;
  left: -30vh;
  top: 43vh;
  border-radius: 50%;
  background: linear-gradient(
    201.42deg,
    #7be8ff 13.47%,
    #3f98ff 33.16%,
    rgba(0, 33, 65, 0.68) 80.28%
  );
  z-index: -1;
`;

export const SmallBall = styled.div`
  position: absolute;
  width: 25vh;
  height: 25vh;
  right: -5vh;
  top: 85vh;
  border-radius: 50%;
  background: linear-gradient(
    207.52deg,
    #d2f7ff 13.95%,
    #61c5db 37.16%,
    rgba(0, 132, 201, 0.27) 91.31%
  );
  z-index: -1;
`;
