import styled from '@emotion/styled';

export const ApplicationPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 2vh;
  height: 100vh;
`;

export const Template = styled.div`
  font-size: 16px;
`;

export const Title = styled.div`
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  margin: 20px 0 30px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000000;
  border-bottom: none;
  width: 250px;
`;

export const ApplyNum = styled.div`
  font-weight: 500;
  background-color: #c4c4c4;
  height: 100%;
  line-height: 25px;
  padding: 0 15px;
  border-right: 1px solid #000000;
`;

export const Content = styled.div`
  text-align: center;
  width: 60%;
`;

export const Container = styled.div`
  border: 2px solid #000000;
`;

export const Table = styled.table`
  width: 700px;
  text-align: center;

  td {
    vertical-align: middle;
    border: 1px solid #000000;
    border-bottom: none;
    border-collapse: collapse;
  }
  * {
    line-height: 25px;
  }

  img {
    display: block;
    width: 215px;
    height: 287px;
  }
`;

export const Subject = styled.td`
  font-weight: 500;
  background-color: #c4c4c4;
  border-collapse: collapse;
  vertical-align: middle;
  border: 1px solid #000000;
`;

export const Details = styled.div`
  width: 700px;
  padding: 0 5px 20px;
`;

export const Pledge = styled.div`
  text-indent: 5px;
  line-height: 24px;
  strong {
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Date = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin: 0 auto;
  line-height: 30px;
`;

export const Signature = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-left: auto;
  line-height: 30px;
`;

export const Principal = styled.div`
  font-size: 20px;
  border-bottom: 1px solid #c4c4c4;
  line-height: 30px;
`;

export const True = styled.div`
  text-align: center;
  line-height: 50px;
`;

export const Seal = styled.div`
  text-align: end;
  font-size: 20px;
  margin-right: 40px;
`;
