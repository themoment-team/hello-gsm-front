import styled from '@emotion/styled';

export const TicketPage = styled.div`
  padding: 50px 0;
  background-color: #ffffff;
  @media print {
    -webkit-print-color-adjust: exact;

    /* body {
      margin: 1.6cm;
    } */
  }
`;

export const Ticket = styled.div`
  width: 63vh;
  height: 40vh;

  margin: 0 auto 100px;

  :nth-child(2n) {
    margin: 0 auto 150px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 12px;
  line-height: 20px;
  font-weight: 100;
  td {
    border: 1px solid #000;
    border-collapse: collapse;
    vertical-align: middle;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Subject = styled.td`
  font-weight: 500;
  background-color: #e9e9e9;
  border-collapse: collapse;
  vertical-align: middle;
  width: 10%;
`;

export const Left = styled.td`
  text-align: left;
  padding-left: 10px;
`;

export const Right = styled.p`
  text-align: right;
  padding-right: 10px;
`;

export const Dash = styled.div`
  border-top: 1px dashed red;
  width: 100%;
  margin-top: 30px;
`;
