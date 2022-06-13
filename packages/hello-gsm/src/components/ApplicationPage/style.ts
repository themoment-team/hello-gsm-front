import styled from '@emotion/styled';

export const ApplicationPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 1vh;
  height: 100vh;
  overflow: hidden;
  font-size: 1vh;
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

  svg {
    width: 100%;
    height: 100%;
  }

  .slash {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="100%" x2="100%" y2="0" stroke="gray" /></svg>');
  }

  .backSlash {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" /></svg>');
  }
`;

export const ScoreTable = styled(Table)`
  tbody {
    display: flex;
  }

  tr {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  th,
  td {
    display: block;
  }
`;

export const TestTable = styled.div`
  display: flex;
  height: 400px;
`;

export const Test = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.08vh solid #000000;
  border-collapse: collapse;
  width: 100%;
`;

export const Value = styled.div`
  border-bottom: 0.08vh solid #000000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TestSubject = styled.div`
  font-weight: 500;
  background-color: #e9e9e9;
  border-bottom: 0.08vh solid #000000;
  line-height: 25px;
  text-align: center;
  padding: 0 0.2vh;
  height: 25px;
`;

export const TestSlash = styled.div`
  height: 100%;
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

export const ScoreDetails = styled.div``;

export const SignatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5vh;
  margin-top: 1.5vh;
`;

export const Slash = styled.td`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEx_d8_3x5_Ldi_xGmZrFDoNwWm-1g42zYw&usqp=CAU');
  background-size: contain;
  background-repeat: no-repeat;
`;
