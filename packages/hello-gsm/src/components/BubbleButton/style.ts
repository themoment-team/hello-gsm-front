import styled from '@emotion/styled';
import device from 'shared/config';

export const ToCalculator = styled.button`
  position: absolute;
  right: 10%;
  padding: 1rem 1.5rem;
  background-color: #f3f3f3;
  border-radius: 12px;
  cursor: pointer;
  border: none;

  color: ${({ theme }) => theme.color.black};
  text-align: center;

  ${({ theme }) => theme.typo.h4}
  font-weight: 600;

  &:nth-of-type(1) {
    top: 860px;
  }
  &:nth-of-type(2) {
    top: 960px;
  }

  &:hover {
    background: rgba(243, 243, 243, 0.52);
    transition: 0.3s;
  }

  @media ${device.tablet} {
    &:nth-of-type(1) {
      top: 700px;
    }
    &:nth-of-type(2) {
      top: 800px;
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;
