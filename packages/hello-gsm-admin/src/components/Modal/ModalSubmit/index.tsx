import { useEffect } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';

import useStore from 'Stores/StoreContainer';
import { CommonApplicationResponseType } from 'Types/application';

const ModalSubmit = ({ data }: { data: CommonApplicationResponseType }) => {
  const { setSelectedOption, selectedOption } = useStore();
  useEffect(() => {
    setSelectedOption(data.isPrintsArrived ? 1 : 2);
  }, [setSelectedOption, data.isPrintsArrived]);

  return (
    <S.ModalSubmit>
      <S.ModalOption onClick={() => setSelectedOption(1)}>
        <I.Submit isActive={selectedOption !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => setSelectedOption(2)}>
        <I.NotSubmit isActive={selectedOption !== 2} />
      </S.ModalOption>
    </S.ModalSubmit>
  );
};

export default ModalSubmit;
