import type { NextPage } from 'next';
import * as S from './style';
import Link from 'next/link';
import { Input } from 'components';
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
    <S.SignInPage>
      <S.BigBall />
      <S.SmallBall />
      <S.SignInForm onSubmit={handleSubmit(onValid)}>
        <S.Title>로그인</S.Title>
        <Input
          placeholder="이메일을 입력해주세요."
          type="text"
          register={register('id', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          bigWidth={false}
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          register={register('password', {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
          bigWidth={false}
        />
        <S.Submit>로그인</S.Submit>
      </S.SignInForm>
    </S.SignInPage>
  );
};

export default SignInPage;
