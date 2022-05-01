import styled from '@emotion/styled';

export const ApplyPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const BarBox = styled.div`
  border-right: 3px solid rgba(255, 255, 255, 0.17);
`;

export const BarElement = styled.p`
  color: #f8f8f8;
  font-weight: 400;
  font-size: 20px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &::after {
    content: '';
    background: #f8f8f8;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    left: 6.5px;
    margin-left: 15px;
  }
`;

export const ApplyPageContent = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #f8f8f8;
  text-align: center;
`;

export const ImgInputBox = styled.label`
  width: 210px;
  height: 280px;
  background-color: #484453;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Description = styled.p`
  color: #96939c;
  font-weight: 400;
  font-size: 14px;
`;

export const InputImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameBox = styled.div`
  width: 800px;
  height: 55px;
  border-radius: 6px;
  background: #484453;
  margin-top: 60px;
  padding: 16px 20px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  font-size: 20px;
`;

export const GenderBox = styled.div`
  width: 800px;
  height: 55px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const GenderSelect = styled.div`
  width: 390px;
  background: #a0a0a0;
  color: #f8f8f8;
  font-weight: 700;
  font-size: 20px;
  border-radius: 6px;
  padding: 16px 176px;
`;
