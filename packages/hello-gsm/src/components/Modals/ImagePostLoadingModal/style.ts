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
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingCircleBackGround = styled.div`
  width: 136px;
  height: 136px;
  border-radius: 100%;
  background-image: linear-gradient(
    202.92deg,
    #d1d1ca 7.76%,
    #a5a5a4 32.18%,
    #747770 60.66%,
    #3e3e3e 90.6%
  );
`;

export const LoadingCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-image: linear-gradient(
    202.92deg,
    #fcffc0 7.76%,
    #f7ff5f 32.18%,
    #d0da44 60.66%,
    #70a52e 90.6%
  );
  box-shadow: 4px 4px 31px rgba(0, 0, 0, 0.25);
  animation: fadeInAndOut 1.8s ease-out infinite;
  @keyframes fadeInAndOut {
    0%,
    20% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    80%,
    100% {
      opacity: 1;
    }
  }
`;

export const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.79);
  font-weight: 400;
  font-size: 20px;
`;
