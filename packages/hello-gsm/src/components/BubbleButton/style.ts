import styled from '@emotion/styled';
import device from 'shared/config';

export const ToCalculator = styled.button`
  position: absolute;
  right: 10%;
  padding: 1rem 1.5rem;
  background-color: #f3f3f3;
  border-radius: 0.75rem;
  cursor: pointer;
  border: none;

  color: ${({ theme }) => theme.color.black};
  text-align: center;

  ${({ theme }) => theme.typo.h4}
  font-weight: 600;

  &:nth-of-type(1) {
    top: 53.75rem;
  }
  &:nth-of-type(2) {
    top: 60rem;
  }

  &:hover {
    background: rgba(243, 243, 243, 0.52);
    transition: 0.3s;
  }

  @media ${device.tablet} {
    &:nth-of-type(1) {
      top: 43.75rem;
    }
    &:nth-of-type(2) {
      top: 50rem;
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;
