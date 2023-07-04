import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 1rem 3.3125rem;
  background-color: inherit;
  border-radius: 1rem;
  cursor: pointer;
  ${({ theme }) => theme.typo.h5}
  font-weight: 600;
`;
