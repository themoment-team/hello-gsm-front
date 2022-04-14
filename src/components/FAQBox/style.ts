import styled from '@emotion/styled';

export const FAQBox = styled.div`
  width: 620px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 15px 0;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.47);
    cursor: pointer;
  }
  p {
    display: inline;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const Title = styled.p``;

export const PointColor = styled.p`
  color: #42bafe;
  margin-right: 5px;
`;
