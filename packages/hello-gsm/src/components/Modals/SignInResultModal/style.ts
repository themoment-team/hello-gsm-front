import styled from '@emotion/styled';

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
`;

export const SucessComment = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
`;
