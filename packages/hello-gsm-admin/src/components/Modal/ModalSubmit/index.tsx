import React, { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';

const ModalSubmit: React.FC = () => {
  const [selectedButtonId, setSelectedButtonId] = useState<number>();
  const { setSelectedOption } = useStore();

  const handleButtonClick = (id: number) => {
    setSelectedButtonId(id);
    setSelectedOption(id);
  };

  return (
    <S.ModalSubmit>
      <S.ModalOption onClick={() => handleButtonClick(1)}>
        <I.Submit isActive={selectedButtonId !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick(2)}>
        <I.NotSubmit isActive={selectedButtonId !== 2} />
      </S.ModalOption>
    </S.ModalSubmit>
  );
};

export default ModalSubmit;
