import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { FAQPage, SEOHelmet } from 'components';
import axios from 'axios';
import auth from 'Api/auth';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { CheckType } from 'type/check';
import { HeaderType } from 'type/header';

interface FaqType {
  data: {
    question: string;
    answer: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ data }) => {
  const seoTitle = '자주 묻는 질문';
  const desc = '매년 지원자들이 궁금해 하는 질문들을 보여줍니다.';
  const { setLogged } = useStore();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await auth.check();
        setLogged(true);
      } catch (error: any) {
        if (error.response.status === 401) {
          try {
            // accessToken 발급
            await auth.refresh();
            setLogged(true);
          } catch (error) {
            setLogged(false);
          }
        }
      }
    };
    checkLogin();
  }, []);
  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <FAQPage faqData={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get('https://hellogsm.kr/data/faq.json');
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Faq;
