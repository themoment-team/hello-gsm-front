import styled from '@emotion/styled';

export const DepartmentModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;

export const FAQModalBox = styled.div`
  width: 600px;
  height: 450px;
  background-color: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  color: #4d4d4d;
`;

export const SelectBox = styled.div`
  width: 520px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectContent = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f0921;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background: #19baff;
    color: #ffffff;
    transition: background 0.4s;
  }
`;
