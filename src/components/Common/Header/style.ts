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
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: #bdbdbd;
  &:hover {
    cursor: pointer;
  }
`;

export const MemberBox = styled.div`
  width: 140px;
  color: #969696;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  a:hover{
    cursor: pointer;
  }
`;

export const Login = styled.a`

`;

export const SignUp = styled.a`

`;