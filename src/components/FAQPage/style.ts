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
  width: 200px;
  margin-top: 100px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  align-items: flex-end;
`;

export const SkyBlueBall = styled.div`
  width: 177px;
  height: 177px;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(
    207.52deg,
    #d2f7ff 13.95%,
    #61c5db 37.16%,
    rgba(0, 132, 201, 0.27) 91.31%
  );
  top: 80vh;
  left: 3vw;
  z-index: -1;
`;

export const BlueBall = styled.div`
  position: absolute;
  width: 131px;
  height: 131px;
  border-radius: 100%;
  top: 75vh;
  right: 4vw;
  z-index: -1;
  background: linear-gradient(
    207.52deg,
    #5dc4ff 13.95%,
    #2978d6 37.16%,
    #0a244a 91.31%
  );
`;
