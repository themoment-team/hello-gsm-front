import type { GetServerSideProps, NextPage } from 'next';
import { SEOHelmet } from 'components';
import { MypagePage } from 'PageContainer';
import application from 'Api/application';
import { CommonApplicationResponseType } from 'type/application';
import { useEffect, useState } from 'react';
import identity from 'Api/identity';
import { IdentityType } from 'type/identity';
import { UserInfoType } from 'type/user';
import user from 'Api/user';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

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
      console.log(e);
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
      console.log(e);
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const { data }: ApplicationDataType = await application.getMyApplication();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//       redirect: {
//         destination: '/auth/signin',
//       },
//     };
//   }
// };

export default MyPage;
