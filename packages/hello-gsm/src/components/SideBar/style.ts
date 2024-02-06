import styled from '@emotion/styled';
import device from 'shared/config';

interface AnimationProps {
  animation: boolean | null;
}

export const Background = styled.div<AnimationProps>`
  display: ${props => (props.animation == null ? 'none' : 'block')};
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.51);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  animation-name: ${props => (props.animation ? 'showin' : 'showout')};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes showin {
    to {
      background: rgba(0, 0, 0, 0.51);
    }
  }
  @keyframes showout {
    to {
      background: none;
      z-index: -1;
    }
  }
`;

export const SideBar = styled.div<AnimationProps>`
  ${({ theme }) => theme.typo.h4}
  display: ${props => (props.animation == null ? 'none' : 'flex')};
  padding: 1.0625rem 1.0625rem 3.125rem;
  justify-content: space-between;
  width: 50vw;
  height: 100vh;
  background: #20212f;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  animation-name: ${props => (props.animation ? 'slidein' : 'slideout')};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes slidein {
    from {
      right: -31.25rem;
    }
    to {
      right: 0;
    }
  }
  @keyframes slideout {
    from {
      right: 0;
    }
    to {
      right: -40.25rem;
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
  padding: 6.25rem 0;

  @media ${device.mobile} {
    padding-bottom: 14rem;
  }
`;

export const LinkWrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLink = styled.p`
  ${({ theme }) => theme.typo.h4};
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

export const LogOut = styled.div`
  cursor: pointer;
  color: #bdbdbd;
`;

export const Auth = styled(LinkWrapper)`
  height: 7vh;
`;
