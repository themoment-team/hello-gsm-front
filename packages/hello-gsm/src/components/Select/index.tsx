import React from 'react';
import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps {
  children: React.ReactNode;
  register: UseFormRegisterReturn;
}

const Select: NextPage<SelectProps> = ({ children, register }: SelectProps) => {
  return <S.Select {...register}>{children}</S.Select>;
};

export default Select;
