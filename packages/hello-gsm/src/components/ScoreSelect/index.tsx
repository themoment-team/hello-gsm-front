import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface ScoreSelectProps {
  register: UseFormRegisterReturn;
  scoreArray: number[] | undefined;
  index: number;
  isSubmission?: string | null;
}

const ScoreSelect: NextPage<ScoreSelectProps> = ({
  register,
  scoreArray,
  index,
  isSubmission,
}: ScoreSelectProps) => {
  return (
    <S.Select {...register}>
      <option>선택</option>
      <option value={5} selected={scoreArray && scoreArray[index] === 5}>
        A
      </option>
      <option value={4} selected={scoreArray && scoreArray[index] === 4}>
        B
      </option>
      <option value={3} selected={scoreArray && scoreArray[index] === 3}>
        C
      </option>
      <option value={2} selected={scoreArray && scoreArray[index] === 2}>
        D
      </option>
      <option value={1} selected={scoreArray && scoreArray[index] === 1}>
        E
      </option>
      <option value={0} selected={scoreArray && scoreArray[index] === 0}>
        없음
      </option>
    </S.Select>
  );
};

export default ScoreSelect;
