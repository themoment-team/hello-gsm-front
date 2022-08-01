import styled from '@emotion/styled';
import device from 'shared/config';

export const FAQPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 150px;
  @media ${device.mobile} {
    top: 50px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`;

export const FAQContent = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.mobile} {
    width: 90%;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 40px;
  }
  @media ${device.mobile} {
    height: 40px;
    margin-top: 20px;
    svg {
      width: 15px;
    }
  }
`;

export const Search = styled.input`
  width: 93%;
  display: block;
  background-color: inherit;
  border: none;
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.mobile} {
    font-size: 16px;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.72);
    opacity: 1;
    @media ${device.mobile} {
      font-size: 16px;
    }
  }
  &:focus {
    outline: none;
    ::placeholder {
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
`;

export const FAQList = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  @media ${device.tablet} {
    margin-top: 15px;
  }
  @media ${device.mobile} {
    margin-top: 0;
    margin-bottom: 35px;
  }
`;

export const FAQTitle = styled.div`
  color: white;
`;

export const FAQListIndex = styled.div`
  width: 200px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    width: 100px;
  }
`;

export const FAQListIndexButtonWrapper = styled.div`
  width: 100px;
  color: #888888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  @media ${device.mobile} {
    font-size: 16px;
    width: 50px;
  }
`;

export const ChangeAllowButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  @media ${device.mobile} {
    svg {
      width: 4px;
    }
  }
`;

export const ListIndex = styled.p`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;

const Ball = styled.div`
  position: absolute;
  border-radius: 100%;
  z-index: -1;
  @media ${device.tablet} {
    display: none;
  }
`;

export const SkyBlueBall = styled(Ball)`
  width: 177px;
  height: 177px;
  background: linear-gradient(
    207.52deg,
    #d2f7ff 13.95%,
    #61c5db 37.16%,
    rgba(0, 132, 201, 0.27) 91.31%
  );
  top: 80vh;
  left: 3vw;
`;

export const BlueBall = styled(Ball)`
  width: 131px;
  height: 131px;
  top: 75vh;
  right: 4vw;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
`;
