import styled from '@emotion/styled';

export const FAQPage = styled.div`
  background-color: #0f0921;
`;

export const FAQWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
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
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export const FAQList = styled.div`
  height: 400px;
`;
