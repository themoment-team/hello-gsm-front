import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { FAQPage, SEOHelmet } from 'components';
import axios from 'axios';
import auth from 'Api/auth';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { CheckType } from 'type/check';

interface FaqType extends CheckType {
  data: {
    question: string;
    answer: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ data, check }) => {
  const seoTitle = '자주 묻는 질문';
  const desc = '매년 지원자들이 궁금해 하는 질문들을 보여줍니다.';
  const { setLogged } = useStore();
  useEffect(() => {
    setLogged(check);
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <FAQPage faqData={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  try {
    const { data } = await axios.get('https://hellogsm.kr/data/faq.json');
    await auth.check(accessToken);
    return {
      props: {
        data,
        check: true,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Faq;
