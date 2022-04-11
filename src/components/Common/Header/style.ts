import styled from '@emotion/styled';

export const Header = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`

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
  &:hover {
    cursor: pointer;
  }
`;

export const MemberBox = styled.div`
  width: 140px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #969696;
    font-weight: 400;
  }
  a:hover {
    cursor: pointer;
  }
`;