import styled from '@emotion/styled';
import device from 'shared/config';

export const HeaderWrap = styled.div`
  color: #ffffff;
  user-select: none;
  height: 70px;
  padding: 0px 5vw;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptop} {
    padding: 0 30px;
  }
`;

export const LogoContent = styled.a`
  font-size: 30px;
  font-weight: 700;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const NavBar = styled.div`
  width: 660px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const Content = styled.a`
  font-size: 18px;
`;

export const NavContent = styled(Content)`
  font-weight: 700;
  color: #bdbdbd;
`;

export const MemberBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  @media ${device.laptop} {
    width: 130px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const MemberContent = styled(Content)`
  color: #dddddd;
  font-weight: 400;
`;

export const HamBurger = styled.div`
  display: none;
  height: 14px;
  cursor: pointer;
  @media ${device.tablet} {
    display: block;
  }
`;
