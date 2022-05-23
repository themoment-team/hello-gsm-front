import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DescriptionLine = styled.p`
  font-weight: 700;
  font-size: 36px;
  margin-top: 15px;
  color: #ffffff;
  text-align: center;
`;

export const PostScript = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 15px;
  text-align: center;
`;

export const Login = styled.a`
  width: 155px;
  height: 45px;
  background: #42bafe;
  border-radius: 10px;
  font-weight: 700;
  font-size: 21px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Blue = styled.span`
  color: #3796ff;
`;

export const Red = styled.span`
  color: #fa4953;
`;

export const Celebration = styled.div`
  position: absolute;
  top: 350px;
  left: 200px;
  z-index: -1;
`;
