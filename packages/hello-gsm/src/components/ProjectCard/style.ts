import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 25.875rem;
  height: 28.125rem;
  border-radius: 1rem;
  border: 0.0625rem solid rgba(75, 75, 75, 0.8);
  background: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1.25rem);

  padding: 2.5rem 2.75rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 20.375rem;
  height: 12.5rem;
  border-radius: 0.625rem;
  box-shadow: 0.125rem 0.125rem 1.25rem 0rem rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;

  .iamge {
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardTitle = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  letter-spacing: -0.045rem;
`;

export const CardDescription = styled.p`
  color: #a7a7a7;
  ${({ theme }) => theme.typo.body1};
  font-weight: 400;
  letter-spacing: -0.02rem;
  word-break: keep-all;
`;
