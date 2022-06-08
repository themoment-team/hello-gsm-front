import type { GetStaticProps, NextPage } from 'next';
import { FAQPage, SEOHelmet } from 'components';
import axios from 'axios';

interface FaqType {
  data: {
    question: string;
    answer: string;
  }[];
}

const Faq: NextPage<FaqType> = ({ data }) => {
  const seoTitle = '자주 묻는 질문';
  const desc = '매년 지원자들이 궁금해 하는 질문들을 보여줍니다.';
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
