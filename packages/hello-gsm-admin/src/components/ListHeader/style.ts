import styled from '@emotion/styled';

export const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListHeaderContent = styled.div`
  width: calc(100vw - 221px - 69px);
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
`;

export const SearchInput = styled.input`
  width: 100%;
  color: #9e9e9e;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
