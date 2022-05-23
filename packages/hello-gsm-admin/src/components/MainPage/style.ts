import styled from '@emotion/styled';

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPageContent = styled.div`
  width: 1530px;
  margin: 0 auto;
`;

export const Searchbox = styled.div`
  width: 650px;
  height: 45px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 560px;
  border: none;
  padding-left: 25px;
  border-radius: 10px;
  outline: none;
  font-weight: 900;
  font-size: 18px;
  ::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.48);
  }
`;

export const SearchButton = styled.div`
  width: 90px;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
`;

export const HeaderElement = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #f8f8f8;
  text-align: center;
`;

export const ContentList = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: scroll;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 1320px;
  height: 100%;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
`;

export const RegistrationNumber = styled.p`
  width: 140px;
  font-weight: 700;
  font-size: 18px;
  color: #0f0921;
  text-align: center;
`;

export const Name = styled.p`
  width: 130px;
  font-weight: 500;
  font-size: 18px;
  color: #0f0921;
  text-align: center;
`;

export const Screening = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const SchoolName = styled.p`
  width: 210px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const isDocumentReception = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Checkbox = styled.span`
  width: 25px;
  height: 25px;
  background: #bdbdbd;
  border-radius: 5px;
`;

const Number = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const PhoneNumber = styled(Number)`
  width: 170px;
`;

export const GuardianNumber = styled(Number)`
  width: 200px;
`;

export const TeacherNumber = styled(Number)`
  width: 210px;
`;

export const Pass = styled.div`
  width: 90px;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  color: #19baff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
