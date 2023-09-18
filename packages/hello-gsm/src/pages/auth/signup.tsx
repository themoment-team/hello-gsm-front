import type { NextPage } from 'next';
import { SEOHelmet } from 'components';
import { SignUpPage } from 'PageContainer';
import { UserInfoType } from 'type/user';
import user from 'Api/user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const SignUp: NextPage = () => {
  const seoTitle = '회원가입';
  const desc = '회원가입 페이지입니다.';

  const { push } = useRouter();

  const getUser = async () => {
    try {
      const { data }: { data: UserInfoType } = await user.getMyInfo();
      if (data.role === 'ROLE_USER') {
        push('/');
        toast.info('본인인증이 완료되어 있습니다.');
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
      <SignUpPage />
    </>
  );
};

export default SignUp;
