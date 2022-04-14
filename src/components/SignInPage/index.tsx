import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from 'components/Common/Header';
import Link from 'next/link';
import SignInInput from 'components/Input/SignIn';
import { useForm } from 'react-hook-form';

interface UserForm {
  id: string;
  password: string;
}

const SignInPage: NextPage = () => {
  const { register, handleSubmit } = useForm<UserForm>();
  const onValid = (validForm: UserForm) => {
    console.log(validForm);
  };
  return (
    <>
      <Header />
      <S.SignInPage>
        <S.BigCircle />
        <S.SmallCircle />
        <S.SignInForm onSubmit={handleSubmit(onValid)}>
          <S.Title>로그인</S.Title>
          <SignInInput
            placeholder="아이디 또는 이메일을 입력해주세요"
            type="text"
            register={register('id', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <SignInInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            register={register('password', {
              required: true,
              minLength: 8,
              maxLength: 16,
            })}
          />
          <S.Submit>로그인</S.Submit>
          <S.Forget>
            <div>
              <Link href="/findid">아이디</Link> 혹은{' '}
              <Link href="/findpassword">비밀번호</Link>를 잊어 버리셨나요?
            </div>
            <Link href="/signup" passHref>
              <S.SignUp>회원가입</S.SignUp>
            </Link>
          </S.Forget>
        </S.SignInForm>
      </S.SignInPage>
    </>
  );
};

export default SignInPage;
