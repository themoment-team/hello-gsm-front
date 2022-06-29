import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface ScoreSelectProps {
  register: UseFormRegisterReturn;
  scoreArray?: number[] | undefined;
  index: number;
}
/**
 *
 * @param register - register 값
 * @param scoreArray - scoreArray값이 있고(이전에 점수를 입력했던 이력이 있다는 뜻), scoreArray[index]값이 N 이랑 같으면 selected되게 함
 * @param index - 배열의 인덱스
 * @returns - select 태그
 */
const ScoreSelect: NextPage<ScoreSelectProps> = ({
  register,
  scoreArray,
  index,
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
