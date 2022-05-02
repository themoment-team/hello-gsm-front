import styled from '@emotion/styled';

export const ApplicationPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 2vh;
  height: 100vh;
`;

export const Document = styled.div`
  position: relative;
  z-index: 1;
  .warterMark {
    position: absolute;
    font-size: 40vh;
    color: #e8e8e8;
    z-index: -1;
    text-align: center;

    transform: rotate(-30deg);
  }
`;

export const Template = styled.div`
  font-size: 1.4vh;
`;

export const Title = styled.div`
  font-size: 3vh;
  text-align: center;
  font-weight: 700;
  margin: 1.7vh 0 2.5vh;
`;

export const SubTitle = styled.div`
  font-size: 1.7vh;
  font-weight: 700;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
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
  background-color: #c4c4c4;
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
  border: 0.08vh solid #000000;
`;

export const Table = styled.table`
  width: 63vh;
  text-align: center;

  td {
    vertical-align: middle;
    border: 0.08vh solid #000000;
    border-collapse: collapse;
  }

  img {
    display: block;
    width: 19vh;
    height: 25vh;
  }
  font-size: 1.2vh;
  line-height: 2.2vh;
`;

export const Subject = styled.td`
  font-weight: 500;
  background-color: #c4c4c4;
  border-collapse: collapse;
  vertical-align: middle;
  border: 0.08vh solid #000000;
  padding: 0 0.2vh;
`;

export const Details = styled.div`
  width: 63vh;
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
`;

export const Seal = styled.div`
  text-align: end;
  font-size: 1.7vh;
  margin-right: 3.5vh;
`;
