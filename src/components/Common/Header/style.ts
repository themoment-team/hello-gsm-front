import styled from '@emotion/styled';

export const Header = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  height: 70px;
  background-color: #0f0921;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContent = styled.a`
  font-size: 30px;
  font-weight: 700;
`;

export const NavBar = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContent = styled.a`
  font-weight: 700;
  font-size: 18px;
  color: #bdbdbd;
`;

export const MemberBox = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberContent = styled.a`
  color: #969696;
  font-weight: 400;
  font-size: 18px;
`;
