import styled from '@emotion/styled';

import { fadeInAndOut } from 'styles/Animations';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.66);
  z-index: 2;

  animation: ${fadeInAndOut} 3s;
  animation-fill-mode: forwards;
`;

export const SucessComment = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
`;

export const Desc = styled.p`
  color: #ffffff;
  line-height: 40px;
`;
