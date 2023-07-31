import styled from '@emotion/styled';

export const ContentBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  :nth-of-type(1) {
    border-top: none;
  }
`;

export const Content = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegistrationNumber = styled.p`
  width: 50px;
  font-size: 12px;
  color: #0f0921;
  text-align: center;
`;

export const Name = styled.p`
  width: 40px;
  font-weight: 500;
  font-size: 12px;
  color: #0f0921;
  text-align: left;
`;

export const Screening = styled.p`
  width: 70px;
  font-weight: 500;
  font-size: 12px;
  color: #212121;
  text-align: left;
`;

export const SchoolName = styled.p`
  width: 90px;
  font-weight: 500;
  font-size: 12px;
  color: #212121;
  text-align: left;
`;

export const isDocumentReception = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DocumentReceptionText = styled.span<{
  documentReception: boolean;
}>`
  color: ${({ documentReception }) =>
    documentReception ? '#2174d8' : '#FF000F'};
  font-size: 12px;
  text-align: left;
`;

const Number = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #616161;
  text-align: center;
`;

export const PhoneNumber = styled(Number)`
  width: 90px;
`;

export const GuardianNumber = styled(Number)`
  width: 90px;
`;

export const TeacherNumber = styled(Number)`
  width: 90px;
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

export const FirstResultText = styled.p`
  font-size: 12px;
  width: 30px;
`;

export const FinalScoreText = styled.p`
  font-size: 12px;
  width: 40px;
`;

export const FinalResultText = styled.p`
  font-size: 12px;
  width: 40px;
`;

export const EditButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 260px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  gap: 5px;
  color: #2174d8;
  border: 1px solid #2174d8;
  border-radius: 10px;
  padding: 7px 18px 7px 18px;
`;
