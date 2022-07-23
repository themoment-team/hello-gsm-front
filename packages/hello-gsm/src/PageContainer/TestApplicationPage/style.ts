import styled from '@emotion/styled';

export const ApplicationPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 1vh;
  height: 100vh;
  overflow: hidden;
  font-size: 1vh;
  @media print {
    -webkit-print-color-adjust: exact;
    .warterMark {
      display: none;
    }
    @page {
      margin: 0;
    }
    body {
      margin: 1.6cm;
    }
  }
`;

export const Document = styled.div`
  width: 63vh;
  position: relative;
  z-index: 1;
  .warterMark {
    position: absolute;
    font-size: 40vh;
    color: #f2f2f2;
    z-index: -1;
    text-align: center;
    transform: rotate(-30deg);
    user-select: none;
  }
`;

export const Title = styled.div`
  font-size: 3vh;
  text-align: center;
  font-weight: 700;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubTitle = styled.div`
  font-size: 1.2vh;
  margin-top: 1.5vh;
  line-height: 2vh;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.16vh solid #000000;
  border-bottom: none;
  width: 22vh;
  font-size: 1.2vh;
`;

export const ApplyNum = styled.div`
  font-weight: 500;
  background-color: #e9e9e9;
  height: 100%;
  line-height: 2.2vh;
  padding: 0 1.3vh;
  border-right: 0.08vh solid #000000;
`;

export const Content = styled.div`
  text-align: center;
  width: 60%;
`;

export const Container = styled.div`
  border: 0.16vh solid #000000;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 1.2vh;
  line-height: 2.2vh;
  margin: 0 auto;
  td {
    vertical-align: middle;
    border: 0.08vh solid #000000;
    border-collapse: collapse;
    overflow: hidden;
  }
  td > img {
    width: 18.7vh;
    height: 25vh;
  }
`;

export const Slash = styled.td`
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="100%" x2="100%" y2="0" stroke="gray" /></svg>');
`;

export const BackSlash = styled.td`
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" /></svg>');
`;

export const Subject = styled.td`
  font-weight: 500;
  background-color: #e9e9e9;
  border-collapse: collapse;
  vertical-align: middle;
  border: 0.08vh solid #000000;
  padding: 0 0.2vh;
`;

export const Details = styled.div`
  padding: 0 0.4vh 2vh;
  border: 0.08vh solid #000000;
  border-top: none;
  font-size: 1.2vh;
  line-height: 2.2vh;
`;

export const Pledge = styled.div`
  text-indent: 0.4vh;
  line-height: 2.1vh;
  strong {
    font-weight: bold;
    font-size: 1.4vh;
  }
`;

export const Date = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 10vh;
  margin: 0 auto;
  line-height: 2.6vh;
  font-size: 1.5vh;
`;

export const Signature = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17vh;
  margin-left: auto;
  line-height: 2.6vh;
  margin: 0 3.5vh 0 auto;
`;

export const Principal = styled.div`
  font-size: 1.7vh;
  border-bottom: 0.08vh solid #c4c4c4;
  line-height: 2.6vh;
`;

export const True = styled.div`
  text-align: center;
  line-height: 4.4vh;
  font-size: 1.5vh;
`;

export const Seal = styled.div`
  text-align: end;
  font-size: 1.7vh;
  margin-right: 3.5vh;
`;

export const Materials = styled.div`
  border-top: 0.17vh solid #000000;
  margin-top: 4.4vh;
  line-height: 3.5vh;
`;

export const SignatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5vh;
  margin-top: 1.5vh;
`;

export const ScoreTable = styled.div`
  display: flex;
  height: 26vh;
  border: 0.08vh solid #000000;
`;

export const GradeAndSubject = styled.div`
  position: relative;
  z-index: 2;
  border-bottom: 0.08vh solid #000000;
  div {
    height: 2.2vh;
  }
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" /></svg>');
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.08vh solid #000000;
  border-collapse: collapse;
  width: 100%;
  border-bottom: none;
`;

export const Value = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 0.08vh solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Semester = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivSubject = styled.div`
  font-weight: 500;
  background-color: #e9e9e9;
  border-bottom: 0.08vh solid #000000;
  line-height: 2.2vh;
  text-align: center;
  padding: 0 0.2vh;
  height: 2.2vh;
`;

export const DivSlash = styled.div`
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" /></svg>');
  border-bottom: 0.08vh solid #000000;
`;

export const NonScoreTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  height: 100%;
  border: 0.08vh solid #000000;
  border-bottom: none;
  width: 100%;
`;

export const ConversionPoint = styled.div`
  display: flex;
  text-align: center;
  border: 0.08vh solid #000000;
  border-top: 0;
  height: 2.6vh;
  line-height: 2.6vh;
`;

export const PrintBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 170px;
  height: 55px;
  right: 100px;
  bottom: 100px;
  border-radius: 30px;
  border: 0.16vh solid #000000;
  z-index: 7;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffffff;

  @media print {
    display: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const PrintDesc = styled.p``;
