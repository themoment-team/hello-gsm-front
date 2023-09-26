import styled from '@emotion/styled';
import device from 'shared/config';

export const FAQPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6.25rem 13vw;

  @media (${device.mobile}) {
    padding: 6.25rem 7vw;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h2}
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-weight: 600;
`;

export const FAQContent = styled.div`
  width: 40.625rem;
  min-height: calc(100vh - 40rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.mobile}) {
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 2.8125rem;
  border-bottom: 0.0625rem solid #ffffff;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Search = styled.input`
  ${({ theme }) => theme.typo.h4}
  flex: 1;
  display: block;
  background-color: inherit;
  border: none;
  font-weight: 400;
  color: #ffffff;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['060']};
    font-weight: 400;
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
  margin-top: 3.125rem;
  margin-bottom: 6.25rem;
`;

export const FAQListIndex = styled.div`
  width: 12.5rem;
  display: flex;
  justify-content: space-between;
`;

export const FAQListIndexButtonWrapper = styled.div`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.white};
  width: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const ChangeAllowButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  background-color: inherit;
  border: none;
  :disabled {
    cursor: default;
    svg {
      path {
        stroke: ${({ theme }) => theme.color.gray['070']};
      }
    }
  }
`;

export const ListIndex = styled.p`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;
