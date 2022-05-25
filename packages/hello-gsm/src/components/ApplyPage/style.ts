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
  width: 200px;
  height: 2400px;
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
  :nth-of-type(1) {
    top: 100px;
  }
  :nth-of-type(2) {
    top: 410px;
  }
  :nth-of-type(3) {
    top: 500px;
  }
  :nth-of-type(4) {
    top: 580px;
  }
  :nth-of-type(5) {
    top: 665px;
  }
  :nth-of-type(6) {
    top: 865px;
  }
  :nth-of-type(7) {
    top: 920px;
  }
  :nth-of-type(8) {
    top: 1110px;
  }
  :nth-of-type(9) {
    top: 1190px;
  }
  :nth-of-type(10) {
    top: 1250px;
  }
  :nth-of-type(11) {
    top: 1330px;
  }
  :nth-of-type(12) {
    top: 1540px;
  }
  :nth-of-type(13) {
    top: 1625px;
  }
  :nth-of-type(14) {
    top: 1710px;
  }
  :nth-of-type(15) {
    top: 1900px;
  }
  :nth-of-type(16) {
    top: 1980px;
  }
`;

export const ApplyPageContent = styled.div`
  width: 880px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const FindAddress = styled.div`
  width: 615px;
  height: 55px;
  border-radius: 6px;
  padding: 15px 25px;
  font-weight: 400;
  font-size: 20px;
  background: #484453;
  border: none;
  color: #f8f8f8;
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

export const TypeBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Type = styled.p`
  width: 250px;
  height: 100%;
  background: #484453;
  border-radius: 6px;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SchoolBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SchoolName = styled.div`
  width: 615px;
  height: 55px;
  border-radius: 6px;
  padding: 15px 25px;
  font-weight: 400;
  font-size: 20px;
  background: #484453;
  color: #f8f8f8;
`;

export const SchoolSearchButton = styled.div`
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

export const GraduatedBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const GraduatedDateBox = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  height: 100%;
  color: #9b98a1;
  border-radius: 6px;
  border: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
  background: #484453 url('/Images/SelectArrow.png') calc(100% - 20px) center
    no-repeat;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`;

export const GraduatedYear = styled(Select)`
  width: 230px;
`;

export const GraduateMonth = styled(Select)`
  width: 130px;
`;

export const GraduatedSelectBox = styled.div`
  width: 370px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GraduatedType = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #484453;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  color: #9b98a1;
`;

export const DepartmentBox = styled.div`
  width: 800px;
  height: 90px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const DepartmentContentBox = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DepartmentSelectButton = styled.div`
  width: 100%;
  height: 55px;
  background: #42bafe;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const DepartmentOrderDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #94929b;
`;

export const GuardianName = styled(Input)`
  margin-top: 50px;
`;

export const GuardianRelation = styled(Input)`
  margin-top: 50px;
`;

export const GuardianCellphone = styled(Input)`
  margin-top: 50px;
`;

export const TeacherName = styled(Input)`
  margin-top: 50px;
`;

export const TeacherPhone = styled(Input)`
  margin-top: 50px;
`;

export const NextButton = styled.div`
  width: 230px;
  height: 65px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 28px;
  color: #0f0921;
  margin-top: 180px;
  margin: 180px 0 200px;
  padding: 17px 88px;
  cursor: pointer;
`;

export const ErrorBox = styled.div`
  width: 240px;
`;

export const Error = styled.p`
  color: #ff4e4e;
  font-weight: 400;
  font-size: 18px;
  position: relative;
  :nth-of-type(1) {
    top: 100px;
  }
  :nth-of-type(2) {
    top: 730px;
  }
  :nth-of-type(3) {
    top: 930px;
  }
  :nth-of-type(4) {
    top: 990px;
  }
  :nth-of-type(5) {
    top: 1280px;
  }
  :nth-of-type(6) {
    top: 1340px;
  }
  :nth-of-type(7) {
    top: 1420px;
  }
  :nth-of-type(8) {
    top: 1630px;
  }
  :nth-of-type(9) {
    top: 1720px;
  }
  :nth-of-type(10) {
    top: 1810px;
  }
  :nth-of-type(11) {
    top: 1990px;
  }
  :nth-of-type(12) {
    top: 2080px;
  }
`;
