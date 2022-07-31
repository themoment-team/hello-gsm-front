import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { GetApplicationType } from 'type/application';
import application from 'Api/application';
import { HeaderType } from 'type/header';
import auth from 'Api/auth';
import { ApplyPage } from 'PageContainer';

const Apply: NextPage<GetApplicationType> = ({ data }) => {
  const seoTitle = '입학 지원';
  const desc = '지원자의 인적사항을 기재합니다.';

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplyPage data={data} />
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
        props: {
          data,
        },
      };
    } else {
      return {
        props: {},
        redirect: {
          destination: '/',
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
