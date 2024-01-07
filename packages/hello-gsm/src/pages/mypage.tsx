import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { application, identity, user } from 'apis';
import { MypagePage } from 'pageContainer';

import { SEOHelmet } from 'components';

import { CommonApplicationResponseType } from 'types/application';
import { IdentityType } from 'types/identity';
import { UserInfoType } from 'types/user';

const MyPage: NextPage = () => {
  const seoTitle = '마이페이지';
  const desc = '내 정보를 확인하고 원서 관리 및 원서 출력 등을 할 수 있습니다.';

  const { push } = useRouter();

  const [applicationData, setApplicationData] =
    useState<CommonApplicationResponseType>();
  const [identityData, setIdentityData] = useState<IdentityType>();

  const getApplication = async () => {
    try {
      const { data } = await application.getMyApplication();
      setApplicationData(data);
    } catch (e) {
      getIdentity();
    }
  };

  const getIdentity = async () => {
    try {
      const { data } = await identity.getMyIdentity();
      setIdentityData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getUser = async () => {
    try {
      const { data }: { data: UserInfoType } = await user.getMyInfo();
      if (data.role === 'ROLE_UNAUTHENTICATED') {
        push('/auth/signup');
        toast.info('본인인증을 먼저 진행해주세요.');
      } else {
        getApplication();
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <SEOHelmet seoTitle={seoTitle} desc={desc} />
      <MypagePage
        applicationData={applicationData}
        identityData={identityData}
      />
    </>
  );
};

export default MyPage;
