import styled from '@emotion/styled';

export const FindAddressModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  @media (max-height: 500px) {
    overflow: scroll;
    align-items: flex-start;
  }
`;
