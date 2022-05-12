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
`;

export const LineList = styled.div`
  width: 150px;
  padding-right: 30px;
  border-right: 2px solid red;
  margin-right: 40px;
`;

export const Line = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: end;
  display: block;
  &::after {
    display: block;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png);
    position: relative;
    background-size: 10px 10px;
    left: 144px;
    top: -20px;
    width: 10px;
    height: 10px;
    content: '';
  }

  :nth-child(1) {
    margin-top: 40px;
  }
  :nth-child(2) {
    margin: 800px 0 0;
  }
  :nth-child(3) {
    margin: 65px 0 0;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  background-color: #ffffff;
  margin-top: 40px;
  justify-content: space-between;
`;

export const CalculateSection = styled.form``;

export const Subject = styled.div`
  width: 100px;
  height: 37px;
  background-color: #19baff;
  border-radius: 6px;
  color: #f8f8f8;
  line-height: 37px;
  text-align: center;
  /* margin-bottom: 12px; */
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
`;

export const SemesterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
