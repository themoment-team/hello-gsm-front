import { useEffect } from 'react';
import * as I from 'Assets/svg';
import * as S from './style';
import useStore from 'Stores/StoreContainer';
import { CommonApplicationResponseType } from 'type/application';

const ModalFirstEvaluationSubmit = ({
  data,
}: {
  data: CommonApplicationResponseType;
}) => {
  const { setSelectedOption, selectedOption } = useStore();
  useEffect(() => {
    setSelectedOption(
      data.firstEvaluation !== 'NOT_YET'
        ? data.firstEvaluation === 'PASS'
          ? 1
          : 2
        : 0,
    );
  }, [setSelectedOption, data.firstEvaluation]);
  return (
    <S.ModalFirstEvaluationSubmit>
      <S.ModalOption onClick={() => setSelectedOption(1)}>
        <I.Pass isActive={selectedOption !== 1} />
      </S.ModalOption>
      <S.ModalOption onClick={() => setSelectedOption(2)}>
        <I.Fail isActive={selectedOption !== 2} />
      </S.ModalOption>
    </S.ModalFirstEvaluationSubmit>
  );
};

export default ModalFirstEvaluationSubmit;
