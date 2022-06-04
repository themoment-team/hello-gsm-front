import styled from '@emotion/styled';

export const ApplicationPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 1vh;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
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
  td {
    vertical-align: middle;
    border: 0.08vh solid #000000;
    border-collapse: collapse;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .diagonalCross {
    position: relative;
    background: linear-gradient(
      to left top,
      #ffffff 0%,
      #ffffff 49.9%,
      #5e5e5e 50%,
      #5e5e5e 51%,
      #ffffff 51.1%,
      #ffffff 100%
    ) !important;
    background-color: transparent;
  }

  /* The real diagonal line */
  .diagonalCross:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    /* Rising diagonal line */
    background: linear-gradient(
      to right bottom,
      #ffffff,
      #ffffff 48%,
      #5e5e5e 49%,
      #5e5e5e 51%,
      #ffffff 52%,
      #ffffff
    ) !important;
    background: linear-gradient(
      to left top,
      #ffffff,
      #ffffff 48%,
      #5e5e5e 49%,
      #5e5e5e 51%,
      #ffffff 52%,
      #ffffff
    ) !important;
  }
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
