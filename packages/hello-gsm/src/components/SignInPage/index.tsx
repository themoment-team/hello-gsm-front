import type { NextPage } from 'next';
import * as S from './style';
import { Header, SEOHelmet } from 'components';
import * as I from 'Assets/svg';
import auth from 'Api/auth';

const SignInPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="로그인" />
      <Header />
      <S.SignInPage>
        <S.BigBall />
        <S.SmallBall />
        <S.SignInForm>
          <S.Title>로그인</S.Title>
          <S.SignInBtn href={auth.signin()}>
            <I.KakaoLogo /> <p>KaKao 로그인</p>
          </S.SignInBtn>
        </S.SignInForm>
      </S.SignInPage>
    </>
  );
};

export default SignInPage;
