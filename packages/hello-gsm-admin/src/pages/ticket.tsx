import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { TicketPage } from 'PageContainer';
import application from 'Api/application';
import { TicketDataType } from 'Types/ticket';
import auth from 'Api/auth';
import HeaderType from 'Types/header';

const Ticket: NextPage<TicketDataType> = ({ data }) => {
  const seoTitle = '수험표 출력';
  const desc = '지원자들의 수험표를 출력하는 페이지입니다.';
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TicketPage data={data} />
    </>
  );
};

// const getTicket = async (accessToken: string) => {
//   try {
//     const { data }: TicketDataType = await application.ticket(accessToken);
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (e) {
//     return {
//       props: {},
//       redirect: {
//         destination: '/signin',
//       },
//     };
//   }
// };

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const refreshToken = `adminRefreshToken=${ctx.req.cookies.adminRefreshToken}`;
//   const accessToken = `adminAccessToken=${ctx.req.cookies.adminAccessToken}`;

//   if (ctx.req.cookies.adminRefreshToken) {
//     if (ctx.req.cookies.adminAccessToken) {
//       return getTicket(accessToken);
//     } else {
//       const { headers }: HeaderType = await auth.refresh(refreshToken);
//       // headers의 set-cookie의 첫번째 요소 (accessToken)을 가져와 저장한다.
//       const accessToken = headers['set-cookie'][0].split(';')[0];
//       // 브라우저에 쿠키들을 저장한다
//       ctx.res.setHeader('set-cookie', headers['set-cookie']);
//       // headers에서 가져온 accessToken을 담아 요청을 보낸다
//       return getTicket(accessToken);
//     }
//   } else {
//     return {
//       props: {},
//       redirect: {
//         destination: '/signin',
//       },
//     };
//   }
// };

export default Ticket;
