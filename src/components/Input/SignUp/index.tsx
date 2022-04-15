import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  smallWidth?: boolean;
}

const SignUpInput: NextPage<InputProps> = ({
  placeholder,
  type,
  register,
  smallWidth = false,
}) => {
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      {...register}
      style={{ width: smallWidth ? '320px' : '800px' }}
    />
  );
};

export default SignUpInput;
