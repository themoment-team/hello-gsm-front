import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { GetApplicationType } from 'type/application';
import application from 'Api/application';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { ApplyPage, CalculatorPage } from 'PageContainer';
import { useEffect, useState } from 'react';

const Apply: NextPage<GetApplicationType> = ({ data }) => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  const [step, setStep] = useState<'원서' | '성적'>('원서');

  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', preventClose);
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      {step === '원서' && (
        <ApplyPage data={data} onNext={() => setStep('성적')} />
      )}
      {step === '성적' && (
        <CalculatorPage
          userIdx={data?.user_idx}
          isSubmissionProp={data?.application?.application_score ? true : false}
        />
      )}
    </>
  );
};

const getApplication = async (accessToken: string) => {
  try {
    const { data }: GetApplicationType = await application.getInformation(
      accessToken,
    );
    if (data.application?.isFinalSubmission) {
      return {
        props: {},
        redirect: {
          destination: '/',
        },
      };
    } else {
      return {
        props: {
          data,
        },
      };
    }
  } catch (error) {
    return {
      props: {},
    };
  }
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const accessToken = `accessToken=${ctx.req.cookies.accessToken}`;
  const refreshToken = `refreshToken=${ctx.req.cookies.refreshToken}`;

  if (ctx.req.cookies.refreshToken) {
    if (ctx.req.cookies.accessToken) {
      return getApplication(accessToken);
    } else {
      try {
        const { headers }: HeaderType = await auth.refresh(refreshToken);
        const accessToken = headers['set-cookie'][0].split(';')[0];
        ctx.res.setHeader('set-cookie', headers['set-cookie']);

        return getApplication(accessToken);
      } catch (error) {
        return {
          props: {},
          redirect: {
            destination: '/auth/signin',
          },
        };
      }
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};

export default Apply;
