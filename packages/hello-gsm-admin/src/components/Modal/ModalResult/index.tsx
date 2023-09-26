import { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { ApplicationListType } from 'Types/application';

const ModalResult = () => {
  const { setSelectedOption, selectedOption } = useStore();

  return (
    <S.ModalResult>
      <S.ModalOption onClick={() => setSelectedOption(1)}>
        <I.Pass isActive={selectedOption !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => setSelectedOption(2)}>
        <I.Fail isActive={selectedOption !== 2} />
      </S.ModalOption>
    </S.ModalResult>
  );
};

export default ModalResult;
