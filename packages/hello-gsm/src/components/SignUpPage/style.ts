import styled from '@emotion/styled';
import { redirect } from 'next/dist/server/api-utils';

export const SignUpPage = styled.div`
  margin: 0 auto;
  height: 130vh;
  background: #0f0921;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LineList = styled.div`
  position: absolute;
  padding-right: 30px;
  border-right: 3px solid rgba(255, 255, 255, 0.17);
  left: -240px;
  height: 900px;
  margin-top: 80px;
  padding-top: 40px;
`;

export const Line = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;

  &::after {
    display: block;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png);
    position: relative;
    background-size: 10px 10px;
    left: 180px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
  }

  :nth-child(2) {
    margin: 90px 0 0;
  }
  :nth-child(3) {
    margin: 30px 0;
  }
  :nth-child(5) {
    margin: 100px 0;
  }
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
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 70px;
`;

export const TosBox = styled.div`
  width: 100%;
  height: 279px;
  background: #484453;
  border-radius: 10px;
  margin-top: 50px;
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
  margin-bottom: 200px;
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
  margin: 40px auto;
  cursor: pointer;
`;

export const LadioSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  input {
    display: none;
  }
  div {
    width: 380px;
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
  width: 255px;
  height: 55px;
  background-color: #484453;
  border-radius: 6px;
  font-size: 20px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  border: none;
`;

export const Option = styled.option``;

export const ErrorMessage = styled.p`
  color: #ff4e4e;
  position: absolute;
  right: -250px;
  width: 220px;
`;
