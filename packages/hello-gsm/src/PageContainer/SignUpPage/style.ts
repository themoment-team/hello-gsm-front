import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import device from 'shared/config';

export const SignUpPage = styled.div`
  margin: 0 auto;
  background: #0f0921;
  padding: 3.75rem 0 12.5rem;
  display: flex;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  input,
  select {
    margin-bottom: 1.5rem;
  }
  @media ${device.laptop} {
    width: 30.25rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.875rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 4.375rem;
`;

export const LadioSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media ${device.mobile} {
    margin-bottom: 1.25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.4375rem;
  background-color: #484453;
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 0 1rem;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  ::placeholder {
    color: rgba(255, 255, 255, 0.43);
  }
  :focus {
    outline: none;
  }
  :disabled {
    color: rgba(255, 255, 255, 0.43);
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
    height: 3.8125rem;
    background-color: #484453;
    color: rgba(255, 255, 255, 0.45);
    border-radius: 0.375rem;
    line-height: 3.8125rem;
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
  height: 3.4375rem;
  background-color: #484453;
  border-radius: 0.375rem;
  font-size: 1rem;
  line-height: 1.8125rem;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  border: none;
`;

export const NoticeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
`;

export const NoticeText = styled.p`
  color: #9e9e9e;
`;

export const ResetText = styled.p`
  color: #42bafe;
  cursor: pointer;
  padding-right: 1rem;
`;

export const TosBox = styled.div`
  width: 100%;
  height: 17.4375rem;
  background: #484453;
  border-radius: 0.625rem;
  margin-top: 2.5rem;
  padding: 1.25rem;
  overflow-y: scroll;
  line-height: 1.25rem;
  color: #ffffff;
  font-size: 1rem;
`;

export const CheckLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3.125rem;
  float: right;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.25rem;
  color: #ffffff;

  input {
    width: 1.25rem;
    height: 1.25rem;
    background: #e4e4e4;
    border-radius: 0.0625rem;
    margin: 0 0.625rem 0;
  }
  margin-bottom: 4.375rem;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  line-height: 2.875rem;
  text-align: center;
  width: 14.0625rem;
  height: 3.4375rem;
  font-weight: 700;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #ff4e4e;
  position: absolute;
  right: -15.625rem;
  width: 13.75rem;
  @media ${device.laptop} {
    display: none;
  }
`;

export const LineList = styled.div`
  position: absolute;
  padding: 2.5rem 1rem 0 0;
  border-right: 0.0625rem solid rgba(255, 255, 255, 0.17);
  left: -26%;
  height: 50rem;
  margin-top: 5rem;

  @media ${device.laptop} {
    left: -50%;
  }
  @media ${device.mobile} {
    left: -55%;
  }
  @media (max-width: 25rem) {
    left: -75%;
  }
  @media (max-width: 23.125rem) {
    display: none;
  }
`;

export const Line = styled.div`
  font-size: 1.25rem;
  line-height: 1.8125rem;
  color: #ffffff;
  text-align: end;

  &::after {
    display: block;
    position: relative;
    background-size: 0.625rem 0.625rem;
    left: 9.6875rem;
    top: -1.25rem;
    width: 0.625rem;
    height: 0.625rem;
    content: '';
    background-color: #ffffff;
    border-radius: 50%;
  }

  :nth-of-type(2) {
    margin: 3.75rem 0 0;
  }
  :nth-of-type(3) {
    margin: 2.5rem 0 2.1875rem;
  }
  :nth-of-type(5) {
    margin: 11.25rem 0;
  }

  @media ${device.tablet} {
    color: #0f0921;
    user-select: none;
  }
  @media ${device.mobile} {
    :nth-of-type(2) {
      margin: 2.1875rem 0 0;
    }
    :nth-of-type(3) {
      margin: 2.5rem 0 2.1875rem;
    }
    :nth-of-type(5) {
      margin: 6.25rem 0;
    }
  }
`;

export const shake = keyframes`
  0% {
    transform: translate(0.0625rem, 0.0625rem) rotate(0deg);
  }
  10% {
    transform: translate(-0.0625rem, -0.125rem) rotate(-1deg);
  }
  20% {
    transform: translate(-0.1875rem, 0rem) rotate(1deg);
  }
  30% {
    transform: translate(0.1875rem, 0.125rem) rotate(0deg);
  }
  40% {
    transform: translate(0.0625rem, -0.0625rem) rotate(1deg);
  }
  50% {
    transform: translate(-0.0625rem, 0.125rem) rotate(-1deg);
  }
  60% {
    transform: translate(-0.1875rem, 0.0625rem) rotate(0deg);
  }
  70% {
    transform: translate(0.1875rem, 0.0625rem) rotate(-1deg);
  }
  80% {
    transform: translate(-0.0625rem, -0.0625rem) rotate(1deg);
  }
  90% {
    transform: translate(0.0625rem, 0.125rem) rotate(0deg);
  }
  100% {
    transform: translate(0.0625rem, -0.125rem) rotate(-1deg);
  }                 
`;

export const TelNumContainer = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  background: #484453;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  margin-bottom: 0.75rem;

  input {
    width: 85%;
  }
`;

export const CertificationButton = styled.button`
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 0.0625rem solid #2174d8;
  background: #42bafe;

  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  cursor: pointer;
`;

export const ReSend = styled.p`
  width: 6.25rem;
  color: #42bafe;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  cursor: pointer;
`;
