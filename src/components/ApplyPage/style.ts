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
  height: 2600px;
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
  width: 100%;
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

export const SocietyBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Society = styled.div`
  width: 390px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a0a0a0;
  border-radius: 6px;
  font-weight: 700;
  font-size: 20px;
  color: #f8f8f8;
`;

export const SchoolBox = styled.div`
  width: 800px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SchoolName = styled(Input)`
  width: 615px;
  :focus {
    background: #484453;
    border: none;
  }
  cursor: default;
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

export const GraduatedYear = styled.select`
  width: 230px;
  height: 100%;
  background: #484453;
  color: #9b98a1;
  border-radius: 6px;
  border: none;
`;

export const GraduateMonth = styled.select`
  width: 130px;
  height: 100%;
  background: #484453;
  color: #9b98a1;
  border-radius: 6px;
  border: none;
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

export const GuardianHomeTelephone = styled(Input)`
  margin-top: 20px;
`;

export const TeacherName = styled(Input)`
  margin-top: 50px;
`;

export const TeacherPhone = styled(Input)`
  margin-top: 50px;
`;

export const NextButton = styled.input`
  width: 230px;
  height: 65px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 28px;
  color: #0f0921;
  margin-top: 180px;
  margin: 180px 0 200px;
`;

export const ErrorBox = styled.div`
  width: 220px;
`;

export const Error = styled.p`
  color: #ff5959;
  font-weight: 400;
  font-size: 14px;
  position: relative;
`;
