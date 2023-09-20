import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { TicketPage } from 'PageContainer';
import { TicketDataType, TicketType } from 'Types/ticket';
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
      <TicketPage
        data={[
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
          {
            applicantName: '전예빈',
            applicantBirth: '2006-03-10',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/98b09d72-ccf7-4633-8c67-064981bc019e2023-09-05T10%3A45%3A23.374322095.jpeg',
            schoolName: null,
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '유시온',
            applicantBirth: '2001-03-05',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7580e0c5-33f6-40ee-a7f8-8622e3c158042023-09-06T04%3A40%3A39.132193539.png',
            schoolName: '명지중학교',
            screening: 'SPECIAL_ADMISSION',
            registrationNumber: null,
          },
          {
            applicantName: '이정우',
            applicantBirth: '2006-05-13',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/7ed3d367-8a83-44d1-a5ce-0d862cc2e6842023-09-07T11%3A14%3A20.290385785.png',
            schoolName: '금호중앙중학교',
            screening: 'GENERAL',
            registrationNumber: null,
          },
          {
            applicantName: '이승제',
            applicantBirth: '2006-07-27',
            applicantImageUri:
              'https://aws-cloudtrail-bucket-hellogsm.s3.ap-northeast-2.amazonaws.com/368c9e6c-eb2d-40ce-b5d4-4a53c7a1d0522023-09-06T10%3A59%3A23.182671711.jpg',
            schoolName: '수완중학교',
            screening: 'SOCIAL',
            registrationNumber: null,
          },
        ]}
      />
    </>
  );
};

export default Ticket;
