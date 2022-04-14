import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}
const SignInInput: NextPage<InputProps> = ({ placeholder, type, register }) => {
  return (
    <S.Input placeholder={placeholder} type={type} {...register}></S.Input>
  );
};

export default SignInInput;
