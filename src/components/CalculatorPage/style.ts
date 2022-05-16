import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin-top: 100px;
`;

export const CalculatePage = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
`;

export const LineList = styled.div`
  width: 180px;
  padding-right: 30px;
  border-right: 3px solid rgba(255, 255, 255, 0.17);
  margin-right: 40px;
  height: 1295px;
`;

export const Line = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  &::after {
    display: block;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png);
    position: relative;
    background-size: 10px 10px;
    left: 170px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
  }

  :nth-child(1) {
    margin-top: 70px;
  }
  :nth-child(2) {
    margin: 700px 0 0;
  }
  :nth-child(3) {
    margin: 350px 0 0;
  }
`;

export const CalculateSection = styled.form`
  width: 1000px;
`;

export const Section = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  /* background-color: #ffffff; */
  margin: 70px 0 200px;
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

export const Select = styled.select`
  width: 127px;
  height: 37px;
  background: #484453;
  border-radius: 6px;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.73);

  table tbody tr {
    line-height: 100px;
  }
`;

export const SemesterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grade = styled.td`
  width: 128px;
  height: 37px;
  background: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  text-align: center;
  vertical-align: middle;
  height: 10px;
`;

export const Attendance = styled.td`
  width: 128px;
  height: 37px;
  background: #0c4680;
  border-radius: 6px;
  color: #f8f8f8;
  text-align: center;
  vertical-align: middle;
`;

export const AttendanceInput = styled.input`
  width: 128px;
  height: 37px;
  color: #ffffff;
  background: #484453;
  border-radius: 6px;
  border: none;
  padding: 0 10px;
`;

export const Submit = styled.button`
  display: block;
  width: 225px;
  height: 64px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
`;
