import styled from '@emotion/styled';
import device from 'shared/config';

export const HeaderWrap = styled.div`
  color: #ffffff;
  user-select: none;
  height: 70px;
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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

export const NavContent = styled.a`
  font-size: 18px;
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

export const MemberContent = styled.a`
  font-size: 18px;
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

export const Logout = styled.button`
  color: #dddddd;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
