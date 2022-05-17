import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from '../Common/Header';
import { useForm } from 'react-hook-form';
import Input from '../Input';

interface UserForm {
  name: string;
  id: string;
  password: string;
  checkPW: string;
  error: string;
  agree: boolean;
  formError: string;
  nonAgree: string;
}

const SignUpPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<UserForm>();

  const onValid = ({ name, id, password, checkPW, agree }: UserForm) => {
    console.log(name, id, password, checkPW, agree);
  };
  const Lines = [
    '본인인증',
    '이름',
    '아이디',
    '비밀번호',
    '비밀번호 확인',
    '개인정보 이용약관',
  ];

  return (
    <>
      <Header />
      <S.SignUpPage>
        <S.LineList>
          {Lines.map((line, i) => (
            <S.Line key={i}>{line}</S.Line>
          ))}
        </S.LineList>
        <S.SignUpForm onSubmit={handleSubmit(onValid)}>
          <S.Title>회원가입</S.Title>
          <S.InputSection>
            <S.User>본인인증</S.User>
            <Input
              placeholder="실명을 입력해주세요."
              type="text"
              bigWidth
              register={register('name', {
                required: true,
              })}
            />
            <Input
              placeholder="아이디를 입력해주세요."
              type="text"
              bigWidth
              register={register('id', {
                required: true,
              })}
            />
            <Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              bigWidth
              register={register('password', {
                required: true,
              })}
            />
            <Input
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              bigWidth
              register={register('checkPW', {
                required: true,
              })}
            />
            <S.TosBox></S.TosBox>
            <S.CheckLabel htmlFor="check">
              <input {...register('agree')} type="checkbox" id="check" />
              개인정보 이용약관을 확인했으며, 이에 동의합니다.
            </S.CheckLabel>
          </S.InputSection>
          <S.Button>가입하기</S.Button>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
