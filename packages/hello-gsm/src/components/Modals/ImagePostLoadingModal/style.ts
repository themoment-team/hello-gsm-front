import styled from '@emotion/styled';

export const ImagePostLoadingModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.66);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const ContentWrap = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.79);
  font-weight: 400;
  font-size: 20px;
`;
