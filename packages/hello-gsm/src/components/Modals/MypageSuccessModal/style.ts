import { fadeInAndOut } from 'shared/Styles/Animations';
import styled from '@emotion/styled';

export const SuccessModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.51);
  position: absolute;
  z-index: 5;
  animation: ${fadeInAndOut} 5s;
  animation-fill-mode: forwards;
`;

export const Content = styled.div`
  height: 330px;
  position: relative;
  top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionWrap = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
`;

export const PostScript = styled.p`
  font-weight: 400;
  font-size: 21px;
  color: rgba(255, 255, 255, 0.69);
`;
