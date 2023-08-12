import type { NextPage } from 'next';
import * as S from './style';
import * as I from 'Assets/svg';
import auth from 'Api/auth';

const SignInPage: NextPage = () => {
  return (
    <>
      <S.SignInPage>
        <S.BigBall />
        <S.SmallBall />
        <S.SignInForm>
          <S.Title>로그인</S.Title>
          <S.SignInBtn href={auth.kakaoSignin()}>
            <I.KakaoLogo /> <p>카카오계정으로 로그인</p>
          </S.SignInBtn>
        </S.SignInForm>
      </S.SignInPage>
    </>
  );
};

export default SignInPage;
