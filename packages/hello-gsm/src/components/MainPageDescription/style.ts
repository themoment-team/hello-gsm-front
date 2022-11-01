import styled from '@emotion/styled';
import device from 'shared/config';

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
  @media (max-width: 1750px) {
    font-size: 25px;
  }
  @media (max-width: 1220px) {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 19px;
    margin-top: 10px;
  }
  @media ${device.mobile} {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const PostScript = styled.p`
  line-height: 30px;
  font-weight: 400;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 15px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 17px;
  }
  @media (max-width: 640px) {
    line-height: 20px;
  }
  @media ${device.mobile} {
    font-size: 11px;
    margin-top: 10px;
  }
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
  @media ${device.mobile} {
    width: 125px;
    height: 35px;
    font-size: 17px;
  }
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
  @media ${device.tablet} {
    top: 300px;
    left: 50%;
    transform: translate(-50%);
    svg {
      width: 100px;
    }
  }
  @media ${device.mobile} {
    top: 150px;
  }
`;

export const Button = styled.button`
  width: 155px;
  height: 45px;
  background: #dee449;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  svg {
    margin-top: 3px;
    @media ${device.mobile} {
      width: 10px;
      height: 14px;
    }
  }
  @media (max-width: 640px) {
    margin-top: 10px;
  }
  @media ${device.mobile} {
    width: 148px;
    height: 37px;
    font-size: 16px;
  }
`;

export const ButtonText = styled.span`
  color: #0f0921;
  margin-left: 5px;
`;
