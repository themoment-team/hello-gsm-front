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
  justify-content: space-between;
`;

export const RegistrationNumber = styled.p`
  width: 132px;
  font-weight: 700;
  font-size: 18px;
  color: #0f0921;
  text-align: center;
`;

export const Name = styled.p`
  width: 132px;
  font-weight: 500;
  font-size: 18px;
  color: #0f0921;
  text-align: center;
`;

export const Screening = styled.p`
  width: 132px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const SchoolName = styled.p`
  width: 190px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const isDocumentReception = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DocumentReceptionText = styled.span<{
  documentReception: boolean;
}>`
  color: ${({ documentReception }) =>
    documentReception ? '#2174d8' : '#FF000F'};
`;

const Number = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: rgba(38, 38, 38, 0.54);
  text-align: center;
`;

export const PhoneNumber = styled(Number)`
  width: 190px;
`;

export const GuardianNumber = styled(Number)`
  width: 190px;
`;

export const TeacherNumber = styled(Number)`
  width: 190px;
`;

export const Button = styled.button`
  width: 91px;
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
