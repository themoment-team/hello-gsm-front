import styled from '@emotion/styled';

export const TicketPage = styled.div`
  padding: 50px 0;
  background-color: #ffffff;
  @media print {
    -webkit-print-color-adjust: exact;
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

export const Slash = styled.td`
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="100%" x2="100%" y2="0" stroke="gray" /></svg>');
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

export const PrintBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8vh 2.5vh;
  position: fixed;
  width: 17vh;
  height: 6.5vh;
  right: 9vh;
  bottom: 9vh;
  border-radius: 0.7vh;
  box-shadow: 0.3vh 0.3vh 0.5vh rgba(0, 0, 0, 0.21);
  z-index: 7;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  svg {
    width: 2.5vh;
  }
  &:hover {
    transition: 0.5s;
    background-color: #000000;
    p {
      color: #ffffff;
    }
    svg > path {
      fill: #ffffff;
    }
  }
  @media print {
    display: none;
  }
`;

export const PrintDesc = styled.p`
  font-size: 2.1vh;
  font-weight: bold;
`;
