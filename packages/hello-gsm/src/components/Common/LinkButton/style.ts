import styled from '@emotion/styled';

export const Button = styled.button`
  ${({ theme }) => theme.typo.h5}
  padding: 1rem 3.3125rem;
  background-color: inherit;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 600;
`;
