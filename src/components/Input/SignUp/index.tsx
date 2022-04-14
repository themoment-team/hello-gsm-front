import React from 'react';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  smallWidth?: boolean;
}

const SignUpInput = ({
  placeholder,
  type,
  register,
  smallWidth = false,
}: InputProps) => {
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
