import styled from '@emotion/styled';

export const FAQBox = styled.div`
  width: 620px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin: 15px 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: background 0.3s;
    background: rgba(255, 255, 255, 0.47);
  }
  p {
    display: inline;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const Title = styled.p`
  padding: 0 50px;
  &::before {
    content: 'Q. ';
    color: #42bafe;
  }
`;

export const IsSearching = styled.span`
  color: #000000;
  font-weight: 900;
  font-size: 22px;
`;
