import styled from '@emotion/styled';
import device from 'shared/config';

export const Description = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DescriptionLine = styled.p`
  ${({ theme }) => theme.typo.h3}
  font-weight: 700;
  margin-top: 0.9375rem;
  color: #ffffff;
  text-align: center;

  @media ${device.laptop} {
    ${({ theme }) => theme.typo.h5}
  }

  @media ${device.mobile} {
    ${({ theme }) => theme.typo.body1}
  }
`;

export const PostScript = styled.p`
  ${({ theme }) => theme.typo.h4}
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.9375rem;
  text-align: center;

  @media ${device.laptop} {
    ${({ theme }) => theme.typo.h5}
  }

  @media ${device.mobile} {
    ${({ theme }) => theme.typo.body1}
  }
`;

export const Login = styled.a`
  width: 9.6875rem;
  height: 2.8125rem;
  background: #42bafe;
  border-radius: 0.625rem;
  font-weight: 700;
  font-size: 1.3125rem;
  margin-top: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Blue = styled.span`
  color: #3796ff;
`;

export const Red = styled.span`
  color: #fa4953;
`;

export const Celebration = styled.div`
  position: absolute;
  top: 21.875rem;
  left: 12.5rem;
  z-index: -1;
`;

export const Button = styled.button`
  width: 9.6875rem;
  height: 2.8125rem;
  background: #dee449;
  border-radius: 0.625rem;
  font-weight: 700;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875rem;

  svg {
    margin-top: 0.1875rem;
  }
`;

export const ButtonText = styled.span`
  color: #0f0921;
  margin-left: 0.3125rem;
`;
