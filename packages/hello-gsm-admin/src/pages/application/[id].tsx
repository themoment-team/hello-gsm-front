import type { NextPage } from 'next';
import application from 'Api/application';
import { SEOHelmet, SideBar } from 'components';
import { ApplicationPage } from 'PageContainer';
import { ApplicationResponseType } from 'type/application';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Application: NextPage = () => {
  const seoTitle = '원서출력';
  const desc = '지원자의 입학 원서 파일을 출력해줍니다.';
  const [applicationData, setApplicationData] =
    useState<ApplicationResponseType>();

  const { push, query } = useRouter();

  const userId = query.id as string;

  const getApplication = async () => {
    try {
      const { data }: { data: ApplicationResponseType } =
        await application.getUserApplication(userId);
      setApplicationData(data);

      if (!data?.admissionStatus.isFinalSubmitted) {
        push('/mypage');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getApplication();
  }, [userId]);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <SideBar />
      <ApplicationPage data={applicationData} />
    </>
  );
};

export default Application;
