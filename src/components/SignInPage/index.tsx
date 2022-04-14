import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from 'components/Common/Header';
import Link from 'next/link';

const SignInPage: NextPage = () => {
  return (
    <>
      <Header />
      <S.SingInPage>
        <S.BigCircle></S.BigCircle>
        <S.SmallCircle></S.SmallCircle>

        <S.SignInBox>
          <S.Title>로그인</S.Title>
          <S.Input placeholder="아이디 또는 이메일을 입력해주세요" />
          <S.Input placeholder="비밀번호를 입력해주세요" />
          <S.Submit>로그인</S.Submit>
          <S.Forget>
            <Link href="/findid">아이디</Link> 혹은{' '}
            <Link href="/findpassword">비밀번호</Link>를 잊어 버리셨나요?
            <Link href="signin">회원가입</Link>
          </S.Forget>
        </S.SignInBox>
      </S.SingInPage>
    </>
  );
};

export default SignInPage;
