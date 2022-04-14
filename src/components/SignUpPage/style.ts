import styled from '@emotion/styled';

export const SignUpPage = styled.div`
  height: calc(100vh - 70px);
  /* background: #0f0921; */
  overflow: hidden;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LineList = styled.div`
  position: relative;
  margin-right: 30px;
`;

export const Line = styled.div`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  /* color: #ffffff; */
  text-align: end;
  display: block;
  &::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f007';
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 0 50px;
  border-left: 1px solid blue;
`;

export const TosBox = styled.div`
  width: 800px;
  height: 279px;
  background: #484453;
  border-radius: 10px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 24px;
  line-height: 46px;
  text-align: center;
  width: 225px;
  height: 55px;
  color: #42bafe;
  font-weight: 700;
  border-radius: 10px;
  border: none;
`;
