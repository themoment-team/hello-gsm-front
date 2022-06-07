import styled from '@emotion/styled';
import { NavContent } from 'components/Common/Header/style';
import device from 'shared/config';

interface AnimationProps {
  animation: boolean | null;
}

export const Background = styled.div<AnimationProps>`
  @media (min-width: 960px) {
    display: none;
  }

  display: block;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.51);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  animation-name: ${props => (props.animation ? 'in' : 'out')};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes in {
    to {
      background: rgba(0, 0, 0, 0.51);
    }
  }
  @keyframes out {
    from {
      background: rgba(0, 0, 0, 0.51);
    }
    to {
      background: none;
      display: none;
      z-index: -1;
    }
  }
`;

export const SideBar = styled.div<AnimationProps>`
  @media (min-width: 960px) {
    display: none;
  }
  @media ${device.tablet} {
    padding: 17px 17px 50px;
    justify-content: space-between;
    height: 100vh;
    width: 50vw;
    background-color: red;
    position: fixed;
    z-index: 3;
    right: 0;
    top: 0;
  }
  display: flex;
  animation-name: ${props => (props.animation ? 'slidein' : 'slideout')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes slidein {
    from {
      right: -500px;
    }
    to {
      right: 0;
    }
  }
  @keyframes slideout {
    from {
      right: 0;
      display: block;
    }
    to {
      right: -500px;
      display: none;
    }
  }
`;

export const CloseSideBar = styled.div`
  cursor: pointer;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: end;
  padding-top: 100px;
`;

export const LinkWrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLink = styled(NavContent)``;

export const LogOut = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #bdbdbd;
`;

export const Auth = styled(LinkWrapper)`
  height: 7vh;
`;
