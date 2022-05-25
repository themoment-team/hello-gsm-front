import type { NextPage } from 'next';
import * as S from './style';
import { Header } from 'components';
import * as I from 'Assets/svg';

const SignInPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.SignInPage>
        <S.BigBall />
        <S.SmallBall />
        <S.SignInForm>
          <S.Title>로그인</S.Title>
          <S.SignInBtn>
            <I.KakaoLogo /> <p>KaKao 로그인</p>
          </S.SignInBtn>
        </S.SignInForm>
      </S.SignInPage>
    </>
  );
};

export default SignInPage;
