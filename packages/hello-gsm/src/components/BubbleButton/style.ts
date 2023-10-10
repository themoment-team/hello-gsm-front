import styled from '@emotion/styled';
import device from 'shared/config';

export const ToCalculator = styled.button`
  ${({ theme }) => theme.typo.h4}
  position: absolute;
  right: 10%;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: #f3f3f3;
  border-radius: 0.75rem;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;

  &:nth-of-type(1) {
    top: 35rem;
  }
  &:nth-of-type(2) {
    top: 40rem;
  }
  &:nth-of-type(3) {
    top: 45rem;
  }

  &:hover {
    background: rgba(243, 243, 243, 0.52);
    transition: 0.3s;
  }

  @media ${device.mobile} {
    display: none;
  }
`;
