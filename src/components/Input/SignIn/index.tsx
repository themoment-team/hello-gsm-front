import React from 'react';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}
const Input = ({ placeholder, type, register }: InputProps) => {
  return (
    <S.Input placeholder={placeholder} type={type} {...register}></S.Input>
  );
};

export default Input;
