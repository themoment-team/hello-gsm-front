import { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { ApplicationListType } from 'Types/application';

const ModalSubmit = ({ data }: { data: ApplicationListType }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<number>(
    data.isPrintsArrived ? 1 : 2,
  );
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
