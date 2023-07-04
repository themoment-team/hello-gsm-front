import styled from '@emotion/styled';
import device from 'shared/config';

export const HeaderWrap = styled.div`
  color: #ffffff;
  user-select: none;
  height: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13vw;
`;

export const LogoContent = styled.a`
  font-size: 1.875rem;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const NavBar = styled.div`
  width: 26.5625rem;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavContent = styled.a`
  ${({ theme }) => theme.typo.body1}
  position: relative;
  font-weight: 400;

  ::after {
    position: absolute;
    left: 50%;
    bottom: -0.7rem;
    transform: translateX(-50%);

    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary.lime};
  }
`;

export const MemberBox = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptop} {
    width: 8.125rem;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const MemberContent = styled.a``;

export const HamBurger = styled.div`
  display: none;
  height: 0.875rem;
  cursor: pointer;
  @media ${device.tablet} {
    display: block;
  }
`;

export const Logout = styled.button`
  color: #dddddd;
  font-weight: 400;
  font-size: 1.125rem;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;
