import styled from '@emotion/styled';

export const ContentBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-top: 0.0625rem solid #eeeeee;
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
  z-index: 10;
`;

export const Content = styled.div`
  width: 64vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegistrationNumber = styled.p`
  width: 3.75rem;
  font-size: 0.75rem;
  color: #0f0921;
  text-align: left;
  padding-left: 0.625rem;
`;

export const Name = styled.p`
  width: 3.125rem;
  font-weight: 500;
  font-size: 0.75rem;
  color: #0f0921;
  text-align: left;
`;

export const Screening = styled.p`
  width: 5rem;
  font-weight: 500;
  font-size: 0.75rem;
  color: #212121;
  text-align: left;
`;

export const SchoolName = styled.p`
  width: 5.625rem;
  font-weight: 500;
  font-size: 0.75rem;
  color: #212121;
  text-align: left;
`;

export const isDocumentReception = styled.div`
  width: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DocumentReceptionText = styled.span<{
  isPrintsArrived: boolean;
}>`
  color: ${({ isPrintsArrived }) => (isPrintsArrived ? '#2174d8' : '#FF000F')};
  font-size: 0.75rem;
  text-align: left;
  width: 3.125rem;
`;

const Number = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: #9e9e9e;
  text-align: center;
`;

export const PhoneNumber = styled(Number)`
  width: 6.25rem;
`;

export const GuardianNumber = styled(Number)`
  width: 6.25rem;
`;

export const TeacherNumber = styled(Number)`
  width: 6.25rem;
`;

export const Button = styled.button`
  width: 5.6875rem;
  height: 100%;
  background: #ffffff;
  border-radius: 0.625rem;
  color: #19baff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0;
  border: 0;
`;

export const FirstResultText = styled.p`
  font-size: 0.75rem;
  width: 2.5rem;
`;

export const FinalScoreText = styled.p`
  font-size: 0.75rem;
  width: 3.125rem;
`;

export const FinalResultText = styled.p`
  font-size: 0.75rem;
  width: 2.5rem;
`;

export const EditButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const EditButton = styled.button`
  width: 6.375rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  background: rgba(0, 0, 0, 0);
  color: #2174d8;
  border: 0.0625rem solid #2174d8;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #d6e8ff;
    color: #2174d8;
    border: 0.0625rem solid #d6e8ff;
    path {
      fill: #2174d8;
    }
  }

  &:active {
    background: #2174d8;
    color: #fff;
    border: 0.0625rem solid #2174d8;
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
    border: 0.0625rem solid #e0e0e0;
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
