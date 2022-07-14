import styled from '@emotion/styled';

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
  width: 100px;
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
  cursor: pointer;
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

export const Button = styled.button`
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
  padding: 0;
  border: 0;
`;
