import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  bigWidth: boolean;
  value?: string | null;
}

const Input: NextPage<InputProps> = ({
  placeholder,
  type,
  register,
  bigWidth = true,
  value,
}) => (
  <S.Input
    placeholder={placeholder}
    type={type}
    {...register}
    style={{ width: bigWidth ? '800px' : '328px' }}
    value={value}
  />
);

export default Input;
