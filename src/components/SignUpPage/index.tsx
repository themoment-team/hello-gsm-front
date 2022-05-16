import React, { useState } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from 'components/Common/Header';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import { watch } from 'fs';

interface UserForm {
  email: string;
  checkEmail: string;
  name: string;
  id: string;
  gender: string;
  password: string;
  checkPW: string;
  error: string;
  agree: boolean;
  formError: string;
  nonAgree: string;
  domain: string;
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

  const [value, setValue] = useState('');
  const onValid = ({
    name,
    id,
    password,
    checkPW,
    agree,
    gender,
  }: UserForm) => {
    console.log(gender);
  };
  const Lines = [
    '이메일',
    '성별',
    '이름',
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
            <Input
              placeholder="이메일을 입력해주세요."
              type="text"
              bigWidth
              register={register('email', {
                required: true,
              })}
            />{' '}
            <Input
              placeholder="직접 입력"
              type="text"
              bigWidth
              register={register('domain', {
                required: true,
              })}
              value={value ? value : null}
            />
            <select onChange={e => setValue(e.target.value)}>
              <option value="">-선택-</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="korea.com">korea.com</option>
              <option value="nate.com">nate.com</option>
              <option value="yahoo.com">yahoo.com</option>
            </select>
            <Input
              placeholder="인증번호를 입력해주세요."
              type="text"
              bigWidth
              register={register('checkEmail', {
                required: true,
              })}
            />
            <S.Try>혹시 이메일이 오지 않으셨나요? | 재전송</S.Try>
            <S.LadioWrapper>
              <S.RadioLabel>
                <input
                  {...register('gender')}
                  type="radio"
                  id="gender"
                  value="남자"
                />
                <div>남자</div>
              </S.RadioLabel>
              <S.RadioLabel>
                <input
                  {...register('gender')}
                  type="radio"
                  id="gender"
                  value="여자"
                />
                <div>여자</div>
              </S.RadioLabel>
            </S.LadioWrapper>
            <Input
              placeholder="이름을 입력해주세요."
              type="text"
              bigWidth
              register={register('name', {
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
            <S.CheckLabel htmlFor="agree">
              <input {...register('agree')} type="checkbox" id="agree" />
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
