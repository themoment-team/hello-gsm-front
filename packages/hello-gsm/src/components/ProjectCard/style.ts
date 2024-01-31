import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 414px;
  height: 450px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(20px);
  padding: 40px 44px;
`;

export const ImageWrapper = styled.div`
  width: 326px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 0px rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;

  .iamge {
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.72px;
`;

export const CardDescription = styled.p`
  color: #a7a7a7;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  word-break: keep-all;
`;
