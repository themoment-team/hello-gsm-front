import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MainPage } from 'PageContainer';
import application from 'Api/application';
import {
  ApplicationDataType,
  CommonApplicationResponseType,
} from 'type/application';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home: NextPage = () => {
  const seoTitle = '홈';
  const desc = '광주소프트웨어마이스터고등학교 입학 지원 서비스입니다.';

  const { query, push } = useRouter();

  const [applicationData, setApplicationData] =
    useState<CommonApplicationResponseType>();

  const getApplication = async () => {
    try {
      const { data }: ApplicationDataType =
        await application.getMyApplication();
      setApplicationData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const isVerification = query.verification === 'true';
    const isNotVerification = query.verification === 'false';
    const isLoginFailure = query.login === 'failure';
    const isLogoutSuccess = query.logout === 'success';

    if (isVerification) {
      push('/');
      toast.success('로그인 되었습니다.');
    }

    if (isNotVerification) {
      push('/auth/signup');
      toast.success('본인인증을 위해 확인을 해주세요.');
    }

    if (isLoginFailure) {
      push('/auth/signin');
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
    }

    if (isLogoutSuccess) {
      push('/');
      toast.success('로그아웃 되었습니다.');
    }

    getApplication();
  }, [query]);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MainPage data={applicationData} />
    </>
  );
};

export default Home;
