import Link from 'next/link';

import styled from '@emotion/styled';

import device from 'shared/config';

export const HeaderWrap = styled.header`
  color: #ffffff;
  user-select: none;
  height: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13vw;

  @media (${device.mobile}) {
    padding: 0 7vw;
  }
`;

export const LogoContent = styled(Link)`
  font-size: 1.875rem;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const NavBar = styled.nav`
  width: 26.5625rem;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavContent = styled(Link)`
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
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export const AuthButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  padding: 0.375rem 1rem;
  border-radius: 6.25rem;
  background: #2c273c;
  border: none;
  cursor: pointer;
`;

export const HamBurger = styled.div`
  display: none;
  height: 0.875rem;
  cursor: pointer;
  @media ${device.tablet} {
    display: block;
  }
`;
