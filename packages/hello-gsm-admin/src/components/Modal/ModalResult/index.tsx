import { useState } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { ApplicationListType } from 'Types/application';

const ModalResult = ({
  data,
  selectedButtonId,
}: {
  data: ApplicationListType;
  selectedButtonId: number;
}) => {
  const resetSelectedResult = () => {
    if (selectedButtonId === 2) {
      if (data.firstEvaluation === 'PASS') return 1;
      else if (data.firstEvaluation === 'FALL') return 2;
    } else if (selectedButtonId === 3) {
      if (data.secondEvaluation === 'PASS') return 1;
      else if (data.secondEvaluation === 'FALL') return 2;
    }
  };

  const [selectedResult, setSelectedResult] = useState<number | undefined>(
    resetSelectedResult,
  );
  const { setSelectedOption } = useStore();

  const handleButtonClick = (id: number) => {
    setSelectedResult(id);
    setSelectedOption(id);
  };

  return (
    <S.ModalResult>
      <S.ModalOption onClick={() => handleButtonClick(1)}>
        <I.Pass isActive={selectedResult !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => handleButtonClick(2)}>
        <I.Fail isActive={selectedResult !== 2} />
      </S.ModalOption>
    </S.ModalResult>
  );
};

export default ModalResult;
