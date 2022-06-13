import styled from '@emotion/styled';
import device from 'shared/config';

export const FAQBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin: 15px 0;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 40px;
  cursor: pointer;
  &:hover {
    transition: background 0.3s;
    background: rgba(255, 255, 255, 0.47);
  }
  @media ${device.mobile} {
    height: 35px;
    padding: 0 20px;
  }
`;

export const Title = styled.p`
  display: inline;
  font-weight: 700;
  &::before {
    content: 'Q. ';
    color: #42bafe;
  }
  @media ${device.mobile} {
    font-size: 10px;
  }
`;

export const IsSearching = styled.span`
  color: #000000;
  font-weight: 900;
  font-size: 22px;
  @media ${device.mobile} {
    font-size: 10px;
  }
`;
