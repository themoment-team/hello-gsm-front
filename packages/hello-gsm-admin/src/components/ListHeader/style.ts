import styled from '@emotion/styled';

export const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
`;

export const FinalSubmit = styled(Title)`
  color: #000;
`;

export const SubmitNumber = styled(Title)`
  color: #2174d8;
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: 340px;
  padding: 12px 16px 12px 20px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #e0e0e0;

  & > input::placeholder {
    color: #9e9e9e;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: 0;
  outline: none;
  color: black;
  ::placeholder {
    color: #9e9e9e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SelectBox = styled.select`
  display: flex;
  height: 44px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid var(--Grey-050, #e0e0e0);
  background: #fff;
`;
