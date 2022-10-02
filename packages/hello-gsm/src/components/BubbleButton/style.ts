import styled from '@emotion/styled';
import device from 'shared/config';

export const ToCalculator = styled.button`
  position: absolute;
  right: 10%;
  padding: 0 42px;
  height: 63px;
  background-color: #f3f3f3;
  color: #303030;
  border-radius: 12px;
  text-align: center;
  font-size: 22px;
  line-height: 63px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  border: none;

  &:nth-of-type(1) {
    top: 860px;
  }
  &:nth-of-type(2) {
    top: 960px;
  }

  &:after {
    border-top: 20px solid #f3f3f3;
    border-left: 20px solid transparent;
    border-bottom-right-radius: 2px;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 63px;
    left: 90%;
  }

  &:hover {
    background: rgba(243, 243, 243, 0.52);
    transform: scale(1.05);
    transition: 0.3s;
  }
  &:hover::after {
    border-top: 20px solid rgba(243, 243, 243, 0.52);
    transform: scale(1.05);
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
    position: static;
    font-size: 14px;
    width: 240px;
    height: 40px;
    &:nth-of-type(1) {
      line-height: 20px;
      padding: 0 20px;
    }
    &:nth-of-type(2) {
      line-height: 20px;
    }
    :after {
      display: none;
    }
  }
`;
