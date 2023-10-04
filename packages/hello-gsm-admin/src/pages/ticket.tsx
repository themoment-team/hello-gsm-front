import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { TicketPage } from 'PageContainer';
import { TicketDataType, TicketType } from 'type/ticket';
import { toast } from 'react-toastify';
import application from 'Api/application';
import { useEffect, useState } from 'react';

const Ticket: NextPage = () => {
  const seoTitle = '수험표 출력';
  const desc = '지원자들의 수험표를 출력하는 페이지입니다.';

  const [tickets, setTickets] = useState<TicketType[]>();

  const getTickets = async () => {
    try {
      const { data }: TicketDataType = await application.getAllTickets();
      setTickets(data);
    } catch (e) {
      toast.error('수험표 정보를 불러오지 못했어요. ');
      console.error(e);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <TicketPage data={tickets ?? []} />
    </>
  );
};

export default Ticket;
