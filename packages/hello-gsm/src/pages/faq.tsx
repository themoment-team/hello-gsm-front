import type { GetServerSideProps, NextPage } from 'next';
import { FAQPage, SEOHelmet } from 'components';
import axios from 'axios';
import auth from 'Api/auth';
import { useEffect } from 'react';
import useStore from 'Stores/StoreContainer';
import { CheckType } from 'type/check';
import { HeaderType } from 'type/header';

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
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;
  try {
    const { data } = await axios.get('https://hellogsm.kr/data/faq.json');
    if (ctx.req.cookies.refreshToken) {
      try {
        // 로그인 O
        await auth.check(accessToken);
        return {
          props: {
            data,
            check: true,
          },
        };
      } catch (err) {
        try {
          // accessToken 만료시
          const { headers }: HeaderType = await auth.refresh(refreshToken);
          // 브라우저에 쿠키들을 저장한다
          ctx.res.setHeader('set-cookie', headers['set-cookie']);
          return {
            props: {
              data,
              check: true,
            },
          };
        } catch (err) {
          // 로그인 실패
          return {
            props: {
              data,
              check: false,
            },
          };
        }
      }
    } else {
      // 로그인 X
      return {
        props: {
          data,
          check: false,
        },
      };
    }
  } catch (e) {
    // faq 요청 오류 시
    return {
      props: {},
    };
  }
};

export default Faq;
