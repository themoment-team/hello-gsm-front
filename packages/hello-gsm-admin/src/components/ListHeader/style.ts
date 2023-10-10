import styled from '@emotion/styled';

export const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ListHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
`;

export const FinalSubmit = styled(Title)`
  color: #000;
`;

export const SubmitNumber = styled(Title)`
  color: #2174d8;
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: 21.25rem;
  padding: 0.75rem 1rem 0.75rem 1.25rem;
  justify-content: space-between;
  border-radius: 0.625rem;
  border: 0.0625rem solid #e0e0e0;

  & > input::placeholder {
    color: #9e9e9e;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  border: 0;
  outline: none;
  color: black;
  ::placeholder {
    color: #9e9e9e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SelectWrapper = styled.div`
  width: 7.0625rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #e0e0e0;
  background: #fff;
  padding-left: 1rem;
`;

export const SelectBox = styled.select`
  height: 2.75rem;
  border: 0;
  background: #fff;
  outline: none;

  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
