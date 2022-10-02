import styled from '@emotion/styled';
import device from 'shared/config';

export const ToCalculator = styled.div`
  position: absolute;
  right: 10%;
  top: 959px;
  padding: 0 42px;
  height: 63px;
  bottom: 62px;
  background-color: #f3f3f3;
  color: #303030;
  border-radius: 12px;
  text-align: center;
  font-size: 22px;
  line-height: 63px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;

  &:nth-of-type(2) {
    position: absolute;
    right: 10%;
    top: 859px;
  }

  &:after {
    border-top: 20px solid #f3f3f3;
    border-left: 20px solid transparent;
    border-bottom-right-radius: 2px;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 63px;
    left: 220px;
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

  @media ${device.laptop} {
    top: 920px;
  }
  @media ${device.tablet} {
    top: 720px;
  }
  @media ${device.mobile} {
    font-size: 14px;
    width: 180px;
    height: 40px;
    top: 300px;
    line-height: 40px;
    position: static;
    :after {
      display: none;
    }
  }
`;
