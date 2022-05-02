import styled from '@emotion/styled';

export const SignUpPage = styled.div`
  height: 130vh;
  background: #0f0921;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LineList = styled.div`
  margin-right: 30px;
  padding-top: 140px;
`;

export const Line = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  display: block;
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
    margin: 70px 0 0;
  }
  :nth-child(3) {
    margin: 65px 0 0;
  }
  :nth-child(4) {
    margin: 65px 0 0;
  }
  :nth-child(5) {
    margin: 30px 0 80px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 70px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px 0px;
  border-left: 3px solid rgba(255, 255, 255, 0.17);
  input {
    margin-bottom: 54px;
  }
  input:nth-of-type(3) {
    margin-bottom: 20px;
  }
`;

export const Try = styled.div`
  color: #ffffff;
`;

export const TosBox = styled.div`
  width: 800px;
  height: 279px;
  background: #484453;
  border-radius: 10px;
`;

export const CheckLabel = styled.label`
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
    margin-bottom: 0;
    margin-right: 10px;
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

export const LadioWrapper = styled.div`
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
    font-size: 23px;
    line-height: 61px;
  }

  input[type='radio']:checked + div {
    background-color: #42bafe;
    color: #ffffff;
  }
`;
