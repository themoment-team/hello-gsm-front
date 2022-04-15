import styled from '@emotion/styled';

export const SignUpPage = styled.div`
  height: 130vh;
  background: #0f0921;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LineList = styled.div`
  position: relative;
  margin-right: 30px;
  padding-top: 70px;
`;

export const Line = styled.div`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  display: block;
  &::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: 'o';
    position: absolute;
    left: 180px;
  }

  :nth-child(2) {
    margin: 80px 0;
  }
  :nth-child(3) {
    margin: 20px 0;
  }
  :nth-child(4) {
    margin: 45px 0;
  }
  :nth-child(5) {
    margin: 80px 0;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px 0px;
  border-left: 3px solid rgba(255, 255, 255, 0.17);
`;

export const User = styled.div`
  width: 144px;
  height: 55px;
  background: #484453;
  border-radius: 6px;
  font-weight: 500;
  font-size: 20px;
  line-height: 55px;
  text-align: center;
  color: #42bafe;
  cursor: pointer;
  margin: 0 auto 50px;
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
    margin-right: 10px;
  }
  margin-bottom: 240px;
`;

export const Button = styled.button`
  margin-top: 240px;
  font-size: 24px;
  line-height: 46px;
  text-align: center;
  width: 225px;
  height: 55px;
  color: #42bafe;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  margin: 40px auto;
  cursor: pointer;
`;
