import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import device from 'shared/config';

export const SignUpPage = styled.div`
  margin: 0 auto;
  background: #0f0921;
  padding: 100px 0 200px;
  display: flex;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  input,
  select {
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    width: 500px;
  }
  @media ${device.mobile} {
    width: 380px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 70px;
`;

export const LadioSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;

  @media ${device.mobile} {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  background-color: #484453;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 32px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.43);
  }
  :focus {
    outline: none;
  }
  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  text-align: center;
  width: 45%;
  input {
    display: none;
  }
  div {
    cursor: pointer;
    width: 100%;
    height: 61px;
    background-color: #484453;
    color: rgba(255, 255, 255, 0.45);
    border-radius: 6px;
    line-height: 61px;
  }
  input[type='radio']:checked + div {
    background-color: #42bafe;
    color: #ffffff;
  }
`;

export const SelectSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 30%;
  height: 55px;
  background-color: #484453;
  border-radius: 6px;
  font-size: 20px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  border: none;
`;

export const TosBox = styled.div`
  width: 100%;
  height: 279px;
  background: #484453;
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px;
  overflow-y: scroll;
  line-height: 20px;
  color: #ffffff;
  font-size: 16px;

  @media ${device.mobile} {
    margin-top: 20px;
  }
`;

export const CheckLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  float: right;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  line-height: 20px;
  color: #ffffff;

  input {
    width: 20px;
    height: 20px;
    background: #e4e4e4;
    border-radius: 1px;
    margin: 0 10px 0;
  }
  margin-bottom: 150px;

  @media ${device.laptop} {
    width: 100%;
    justify-content: center;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  line-height: 46px;
  text-align: center;
  width: 225px;
  height: 55px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #ff4e4e;
  position: absolute;
  right: -250px;
  width: 220px;
  @media ${device.laptop} {
    display: none;
  }
`;

export const LineList = styled.div`
  position: absolute;
  padding-right: 30px;
  border-right: 3px solid rgba(255, 255, 255, 0.17);
  left: -40%;
  height: 800px;
  margin-top: 80px;
  padding-top: 40px;

  @media ${device.laptop} {
    left: -50%;
  }
  @media ${device.mobile} {
    left: -55%;
  }
  @media (max-width: 400px) {
    left: -75%;
  }
  @media (max-width: 370px) {
    display: none;
  }
`;

export const Line = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;

  &::after {
    display: block;
    position: relative;
    background-size: 10px 10px;
    left: 178px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
    background-color: #ffffff;
    border-radius: 50%;
  }

  :nth-of-type(2) {
    margin: 90px 0 0;
  }
  :nth-of-type(3) {
    margin: 40px 0 35px;
  }
  :nth-of-type(5) {
    margin: 100px 0;
  }
  @media ${device.tablet} {
    color: #0f0921;
    user-select: none;
  }
  @media ${device.mobile} {
    :nth-of-type(2) {
      margin: 35px 0 0;
    }
    :nth-of-type(3) {
      margin: 40px 0 35px;
    }
    :nth-of-type(5) {
      margin: 100px 0;
    }
  }
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
