import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin: 100px 0;
`;

export const CalculatePage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export const CalculateSection = styled.form`
  width: 800px;
  position: relative;
`;

export const CurriculumSection = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

export const CurriculumValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteNewSubject = styled.span`
  color: red;
  margin-left: 30px;
  position: absolute;
  width: 4%;
  line-height: 37px;
  cursor: pointer;
`;

export const Plus = styled.div`
  cursor: pointer;
  color: #ffffff;
  width: 100%;
  height: 37px;
  border: none;
  background: #0c4680;
  border-radius: 6px;
  margin: 12px 0 150px;
  text-align: center;
  line-height: 37px;
`;

export const Section = styled.div`
  display: flex;
  margin: 70px 0 200px;
  padding: 10px;
  justify-content: space-between;

  table {
    border-collapse: separate;
    border-spacing: 5px 10px;
  }
`;

export const Subject = styled.div`
  width: 100px;
  height: 37px;
  background-color: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  line-height: 37px;
  text-align: center;
  margin-top: 15px;
`;

export const SubjectInput = styled.input`
  width: 100px;
  height: 37px;
  background-color: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  line-height: 37px;
  text-align: center;
  border: none;
  margin-top: 15px;
`;

export const Semester = styled.div`
  width: 127px;
  height: 55px;
  background: #0c4680;
  border-radius: 6px;
  color: #f8f8f8;
  line-height: 55px;
  text-align: center;
`;

export const FreeSemester = styled.div`
  width: 127px;
  height: 37px;
  background: #484453;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  color: rgba(255, 255, 255, 0.56);
  line-height: 37px;
`;

export const Select = styled.select`
  width: 127px;
  height: 37px;
  background: #484453;
  border-radius: 6px;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.73);
  border: none;
`;

export const ValueSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grade = styled.td`
  width: 124px;
  height: 37px;
  background: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  text-align: center;
  vertical-align: middle;
`;

export const AttendanceSection = styled.div`
  height: 135px;
  display: flex;
  margin: 5px;
  justify-content: space-between;
`;

export const Attendance = styled(Grade)`
  background: #0c4680;
`;

export const AttendanceInput = styled.input`
  width: 124px;
  height: 37px;
  color: #ffffff;
  background: #484453;
  border-radius: 6px;
  border: none;
  padding: 0 10px;
  text-align: center;
`;

export const AttendanceGrade = styled.div`
  width: 124px;
  height: 37px;
  background: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  text-align: center;
  line-height: 37px;
`;

export const Submit = styled.button`
  display: block;
  width: 225px;
  height: 64px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  color: #0f0921;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

export const LineList = styled.div`
  position: absolute;
  padding-right: 30px;
  border-right: 3px solid rgba(255, 255, 255, 0.17);
  margin-right: 40px;
  height: 90%;
  left: -200px;
  top: 0;
`;

export const Line = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  position: relative;
  &::after {
    display: block;
    background-color: #ffffff;
    border-radius: 50%;
    position: relative;
    background-size: 10px 10px;
    left: 124px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
  }

  :nth-child(1) {
    top: 7%;
  }
  :nth-child(2) {
    top: 52%;
  }
  :nth-child(3) {
    top: 80%;
  }
`;
