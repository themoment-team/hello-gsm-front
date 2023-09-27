import { useEffect } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { CommonApplicationResponseType } from 'Types/application';

const ModalResult = ({ data }: { data: CommonApplicationResponseType }) => {
  const { setSelectedOption, selectedOption } = useStore();
  useEffect(() => {
    setSelectedOption(data.isPrintsArrived ? 1 : 2);
  }, [setSelectedOption, data.isPrintsArrived]);
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
