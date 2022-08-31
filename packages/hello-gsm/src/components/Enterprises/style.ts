import styled from '@emotion/styled';
import device from 'shared/config';

export const EnterpriseWrap = styled.div`
  width: 1150px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptop} {
    width: 1000px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 150px;
  }
  @media ${device.mobile} {
    height: 100px;
  }
`;

export const EnterpriseLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 90%;
  }
  :nth-of-type(3) {
    width: 935px;
    @media ${device.tablet} {
      width: 75%;
    }
    @media ${device.mobile} {
      justify-content: space-evenly;
      width: 90%;
    }
  }
`;

export const Enterprise = styled.div`
  width: 170px;
  height: 100%;
  border-radius: 17px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    width: 107px;
    height: 30px;
    border-radius: 10px;
  }
  @media ${device.mobile} {
    width: 15%;
    height: 20px;
    border-radius: 5px;
  }
`;

export const EnterpriseImg = styled.div`
  width: 140px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  @media ${device.tablet} {
    width: 70px;
    height: 20px;
  }
  @media ${device.mobile} {
    width: 70%;
    height: 18px;
  }
`;
