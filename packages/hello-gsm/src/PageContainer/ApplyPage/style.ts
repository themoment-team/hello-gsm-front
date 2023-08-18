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
      color: transparent;
    }
  }
`;

export const ApplyPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const ApplyPageContent = styled.form`
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
  :nth-of-type(2) {
    margin-top: 80px;
  }
  :nth-of-type(3) {
    margin-top: 65px;
  }
  :nth-of-type(4) {
    margin-top: 75px;
  }
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
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const Birth = styled.div`
  width: 250px;
  height: 100%;
  border-radius: 6px;
  background: #484453;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressBox = styled.div`
  width: 800px;
  margin-top: 30px;
`;

export const AddressDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-left: 10px;
  color: #c8c8c8;
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

export const Cellphone = styled.div`
  width: 800px;
  height: 55px;
  border-radius: 6px;
  background: #484453;
  margin-top: 60px;
  padding: 15px 25px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
`;

export const TypeBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Type = styled.input`
  display: none;
  &:checked + label {
    background: #42bafe;
    font-weight: 700;
    font-size: 20px;
    color: #f8f8f8;
  }
`;

export const TypeLabel = styled.label`
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

export const GraduationYear = styled(Select)`
  width: 230px;
`;

export const GraduationMonth = styled(Select)`
  width: 130px;
`;

export const GraduatedSelectBox = styled.div`
  width: 370px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GraduationType = styled.input`
  display: none;
  &:checked + label {
    background: #42bafe;
    font-weight: 700;
    font-size: 20px;
    color: #f8f8f8;
  }
`;

export const GraduatedTypeLabel = styled.label`
  width: 250px;
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
  color: #c8c8c8;
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

export const NextButton = styled.button`
  width: 230px;
  height: 65px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 28px;
  color: #0f0921;
  margin-top: 180px;
  margin: 180px 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ErrorBox = styled.div`
  width: 250px;
  position: relative;
`;

export const Error = styled.p`
  color: #ff4e4e;
  font-weight: 400;
  font-size: 18px;
  position: absolute;
  :nth-of-type(1) {
    top: 100px;
  }
  :nth-of-type(2) {
    top: 745px;
  }
  :nth-of-type(3) {
    top: 830px;
  }
  :nth-of-type(4) {
    top: 960px;
  }
  :nth-of-type(5) {
    top: 1350px;
  }
  :nth-of-type(6) {
    top: 1430px;
  }
  :nth-of-type(7) {
    top: 1530px;
  }
  :nth-of-type(8) {
    top: 1760px;
  }
  :nth-of-type(9) {
    top: 1870px;
  }
  :nth-of-type(10) {
    top: 1970px;
  }
  :nth-of-type(11) {
    top: 2170px;
  }
  :nth-of-type(12) {
    top: 2280px;
  }
`;
