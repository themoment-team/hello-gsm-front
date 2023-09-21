import styled from '@emotion/styled';

export const ContentBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  :nth-of-type(1) {
    border-top: none;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1205px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegistrationNumber = styled.p`
  width: 60px;
  font-size: 12px;
  color: #0f0921;
  text-align: left;
  padding-left: 10px;
`;

export const Name = styled.p`
  width: 50px;
  font-weight: 500;
  font-size: 12px;
  color: #0f0921;
  text-align: left;
`;

export const Screening = styled.p`
  width: 80px;
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
  width: 50px;
`;

const Number = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #9e9e9e;
  text-align: center;
`;

export const PhoneNumber = styled(Number)`
  width: 100px;
`;

export const GuardianNumber = styled(Number)`
  width: 100px;
`;

export const TeacherNumber = styled(Number)`
  width: 100px;
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
  width: 40px;
`;

export const FinalScoreText = styled.p`
  font-size: 12px;
  width: 50px;
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
  color: #2174d8;
  border: 1px solid #2174d8;
  border-radius: 10px;
  gap: 5px;
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #d6e8ff;
    color: #2174d8;
    border: 1px solid #d6e8ff;
    path {
      fill: #2174d8;
    }
  }

  &:active {
    background: #2174d8;
    color: #fff;
    border: 1px solid #2174d8;
    path {
      fill: #fff;
    }
    rect {
      fill: #fff;
    }
  }

  &:disabled {
    background: #e0e0e0;
    color: #9e9e9e;
    border: 1px solid #e0e0e0;
    border: 0;
    path {
      fill: #9e9e9e;
    }
    rect {
      fill: #9e9e9e;
    }
  }
  transition: ease-in-out 0.2s;
`;
