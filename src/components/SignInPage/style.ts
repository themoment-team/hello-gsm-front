import styled from '@emotion/styled';

export const SingInPage = styled.div`
  position: relative;
  background: #0f0921;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 100%;
  /* background-color: white; */
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
  width: 328px;
  height: 50px;
  background: rgba(255, 255, 255, 0.27);
  border-radius: 32px;
  box-sizing: border-box;
  padding: 0 32px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.43);
  border: none;
  :focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  width: 328px;
  height: 45px;
  background: #ffffff;
  border-radius: 32px;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  color: #000000;
  cursor: pointer;
  margin: 17px 0 26px;
  border: none;
`;

export const Forget = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  a {
    text-decoration: none;
    color: #5dc0f8;
  }
`;

export const BigCircle = styled.div`
  position: absolute;
  width: 1037px;
  height: 1037px;
  left: -337px;
  top: 481px;
  border-radius: 50%;
  background: linear-gradient(
    201.42deg,
    #7be8ff 13.47%,
    #3f98ff 33.16%,
    rgba(0, 33, 65, 0.68) 80.28%
  );
`;

export const SmallCircle = styled.div`
  position: absolute;
  width: 282px;
  height: 282px;
  left: 1649px;
  top: 902px;
  border-radius: 50%;
  background: linear-gradient(
    207.52deg,
    #d2f7ff 13.95%,
    #61c5db 37.16%,
    rgba(0, 132, 201, 0.27) 91.31%
  );
`;
