import styled from '@emotion/styled';

export const FindSchoolModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  overflow: scroll;
  @media (max-height: 830px) {
    display: block;
  }
`;

export const FindSchoolModalBox = styled.div`
  width: 900px;
  height: 830px;
  background-color: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  @media (max-height: 830px) {
    margin: 0 auto;
  }
`;

export const CancelButton = styled.div`
  position: relative;
  cursor: pointer;
  left: 380px;
`;

export const Title = styled.p`
  color: #0f0921;
  font-weight: 700;
  font-size: 36px;
`;

export const ContentBox = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 60px;
  background: #e9e9e9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

export const SchoolNameInput = styled.input`
  width: 600px;
  height: 100%;
  border: 0;
  background: #e9e9e9;
  font-weight: 500;
  font-size: 19px;
  padding: 0;
  margin-left: 10px;
  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.div`
  width: 140px;
  height: 100%;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  background: #19baff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 325px;
`;

export const ListTitleBox = styled.div`
  height: 40px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.45);
`;

export const ListTitle = styled.p`
  color: #2e2a39;
  font-weight: 700;
  font-size: 24px;
  margin-left: 30px;
  display: inline;
`;

export const ListContentBox = styled.div`
  height: 370px;
  overflow-y: scroll;
`;

export const ListContent = styled.div`
  width: 100%;
  height: 80px;
  background: #ebebeb;
  border-radius: 10px;
  margin: 10px 0;
  color: #5a5a5a;
  padding: 0 35px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #c5c5c5;
    transition: background 0.4s;
  }
`;

export const SchoolName = styled.p`
  width: 150px;
  display: inline-block;
`;

export const SchoolAddress = styled.p`
  display: inline-block;
  margin-left: 60px;
`;
