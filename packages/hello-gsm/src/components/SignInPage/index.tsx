import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from '../Common/Header';
import Link from 'next/link';
import Input from '../Input';
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
        <S.BigBall />
        <S.SmallBall />
        <S.SignInForm onSubmit={handleSubmit(onValid)}>
          <S.Title>로그인</S.Title>
          <Input
            placeholder="아이디 또는 이메일을 입력해주세요"
            type="text"
            register={register('id', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            bigWidth={false}
          />
          <Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            register={register('password', {
              required: true,
              minLength: 8,
              maxLength: 16,
            })}
            bigWidth={false}
          />
          <S.Submit>로그인</S.Submit>
          <S.Forget>
            <div>
              <Link href="/find/id">아이디</Link> 혹은{' '}
              <Link href="/find/password">비밀번호</Link>를 잊어 버리셨나요?
            </div>
            <Link href="/auth/signup" passHref>
              <S.SignUp>회원가입</S.SignUp>
            </Link>
          </S.Forget>
        </S.SignInForm>
      </S.SignInPage>
    </>
  );
};

export default SignInPage;
