import styled from '@emotion/styled';

export const FAQBox = styled.button`
  width: 100%;
  height: 4.0625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  background: #19132a;
  border: none;
  border-radius: 0.625rem;
  margin: 0.9375rem 0;
  padding: 0 2.5rem;
  cursor: pointer;

  &:hover {
    transition: background 0.3s;
    background: ${({ theme }) => theme.color.gray['060']};
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;

  &::before {
    content: 'Q. ';
    color: ${({ theme }) => theme.color.primary['lime']};
  }
`;

export const IsSearching = styled.span`
  color: ${({ theme }) => theme.color.primary['lime']};
`;
