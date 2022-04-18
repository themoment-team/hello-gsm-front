import styled from '@emotion/styled';

export const FAQPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 150px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`;

export const SearchWrapper = styled.div`
  width: 700px;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 70px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.input`
  width: 630px;
  display: block;
  background-color: inherit;
  border: none;
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  &::placeholder {
    color: rgba(255, 255, 255, 0.72);
    opacity: 1;
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
  margin-top: 50px;
`;

export const FAQTitle = styled.div`
  color: white;
`;

export const FAQListIndex = styled.div`
  width: 250px;
  margin-top: 100px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
`;

export const LeftButtonWrapper = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightButtonWrapper = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const ChangeAllowButton = styled.div`
  cursor: pointer;
`;

export const SkyBlueBall = styled.div`
  position: absolute;
  top: 80vh;
  left: 3vw;
  z-index: -1;
`;

export const BlueBall = styled.div`
  position: absolute;
  top: 75vh;
  right: 3vw;
  z-index: -1;
`;
