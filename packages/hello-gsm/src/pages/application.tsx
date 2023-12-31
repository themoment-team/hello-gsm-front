import type { NextPage } from 'next';
import application from 'api/application';
import { SEOHelmet } from 'components';
import { ApplicationPage } from 'PageContainer';
import {
  ApplicationDataType,
  CommonApplicationResponseType,
} from 'type/application';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Application: NextPage = () => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  const [applicationData, setApplicationData] =
    useState<CommonApplicationResponseType>();

  const { push } = useRouter();

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
    getApplication();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <ApplicationPage data={applicationData} />
    </>
  );
};

export default Application;
