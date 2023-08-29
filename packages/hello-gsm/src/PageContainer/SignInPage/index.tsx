import type { NextPage } from 'next';
import * as S from './style';
import auth from 'Api/auth';
import Image from 'next/image';

const SignInPage: NextPage = () => {
  return (
    <S.SignInPage>
      <S.SignInForm>
        <S.Title>로그인</S.Title>
        <S.SignInBtn href={auth.googleSignin()} className="google">
          <Image
            src="/Images/GoogleIcon.png"
            alt="google아이콘"
            width={30}
            height={30}
          />{' '}
          <p>구글계정으로 로그인</p>
        </S.SignInBtn>
        <S.SignInBtn href={auth.kakaoSignin()} className="kakao">
          <Image
            src="/Images/KakaoIcon.png"
            alt="kakao아이콘"
            width={30}
            height={30}
          />
          <p>카카오계정으로 로그인</p>
        </S.SignInBtn>
      </S.SignInForm>
    </S.SignInPage>
  );
};

export default SignInPage;
