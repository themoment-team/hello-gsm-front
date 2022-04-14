import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import Header from 'components/Common/Header';
import { useForm } from 'react-hook-form';
import SignUpInput from 'components/Input/SignUp';
import reset from 'emotion-reset';

interface UserForm {
  id: string;
  password: string;
  checkPW: string;
  error: string;
  formError: string;
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
  const onValid = ({ id, password, checkPW }: UserForm) => {
    // if (password !== checkPW) {
    //   reset({ password: '', checkPW: '' });
    //   console.log('Noob');
    //   return setError('formError', {
    //     type: 'custom',
    //     message: '비밀번호가 다릅니다.',
    //   });
    // }
    // if (password === checkPW) {
    //   console.log('Good');
    //   return setError('formError', {
    //     type: 'custom',
    //     message: 'suceess!!!!!!!!!!1',
    //   });
    // }
    // console.log(password, checkPW);
    // console.log(errors.formError?.message);
    // clearErrors();
    console.log('asd');
  };

  return (
    <>
      <Header />
      <S.SignUpPage>
        <S.LineList>
          <S.Line>이름</S.Line>
          <S.Line>비밀번호</S.Line>
          <S.Line>비밀번호 재확인</S.Line>
          <S.Line>본인인증</S.Line>
          <S.Line>개인정보 이용약관</S.Line>
        </S.LineList>
        <S.SignUpForm onSubmit={handleSubmit(onValid)}>
          <S.Title>회원가입</S.Title>
          <S.InputSection>
            <SignUpInput
              placeholder="실명을 입력해주세요"
              type="text"
              smallWidth={true}
              register={register('id', {
                required: true,
              })}
            />
            <SignUpInput
              placeholder="사용하실 비밀번호를 입력해주세요"
              type="password"
              register={register('password', {
                required: true,
              })}
            />
            <SignUpInput
              placeholder="사용하실 비밀번호를 한번 더 입력해주세요"
              type="password"
              register={register('checkPW', {
                required: true,
              })}
            />
            {errors.formError ? errors.formError?.message : ''}
            <S.TosBox></S.TosBox>
            <S.Button>가입하기</S.Button>
          </S.InputSection>
        </S.SignUpForm>
      </S.SignUpPage>
    </>
  );
};

export default SignUpPage;
