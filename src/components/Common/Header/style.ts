import styled from '@emotion/styled';

export const Header = styled.div`
  height: 70px;
  background-color: #0f0921;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

export const NavBar = styled.div`
  background-color: red;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContent = styled.p`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: #bdbdbd;
  &:hover {
    cursor: pointer;
  }
`;