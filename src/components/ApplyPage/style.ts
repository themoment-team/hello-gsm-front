import styled from '@emotion/styled';

const Input = styled.input`
  width: 800px;
  height: 55px;
  border-radius: 6px;
  padding: 15px 25px;
  font-weight: 400;
  font-size: 20px;
  background: #484453;
  border: none;
  color: #f8f8f8;
  ::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
  &:focus {
    outline: none;
    border: 2px solid #c0c0c0;
    background: rgba(255, 255, 255, 0.89);
    color: #4b4b4b;
    ::placeholder {
      display: none;
    }
  }
`;

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

export const BirthBox = styled.div`
  width: 800px;
  height: 55px;
  border-radius: 6px;
  background: #484453;
  margin-top: 50px;
  padding: 16px 20px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  font-size: 20px;
`;

export const AddressBox = styled.div`
  width: 800px;
  margin-top: 30px;
`;

export const AddressDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  margin-left: 10px;
`;

export const FindAddressBox = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const FindAddress = styled(Input)`
  width: 615px;
  :focus {
    background: #484453;
    border: none;
  }
  cursor: default;
`;

export const FindAddressButton = styled.div`
  width: 170px;
  height: 55px;
  background: #42bafe;
  border-radius: 6px;
  color: #f8f8f8;
  font-weight: 700;
  font-size: 20px;
  padding: 17px 45px;
  cursor: pointer;
`;

export const DetailAddress = styled(Input)`
  margin-top: 5px;
`;

export const HomeTelephone = styled(Input)`
  margin-top: 80px;
`;

export const Cellphone = styled(Input)`
  margin-top: 20px;
`;
