import type { NextPage } from 'next';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';
import useStore from 'Stores/StoreContainer';

interface ScoreSelectProps {
  register: UseFormRegisterReturn;
  scoreArray?: number[] | undefined;
  index: number;
  freeSemesterProps?: string | null;
  artSports?: boolean;
}
/**
 *
 * @param register - register 값
 * @param scoreArray - scoreArray값이 있고(이전에 점수를 입력했던 이력이 있다는 뜻), scoreArray[index]값이 N 이랑 같으면 selected되게 함
 * @param index - 배열의 인덱스
 * @param artSports - 예체능 부분이면 A,B,C 등급만 보이게
 * @returns - select 태그
 */
const ScoreSelect: NextPage<ScoreSelectProps> = ({
  register,
  scoreArray,
  index,
  freeSemesterProps,
  artSports = false,
}: ScoreSelectProps) => {
  const { freeSemester, system } = useStore();
  return (
    <>
      {freeSemester === freeSemesterProps && system === '자유학기제' ? (
        <S.FreeSemester>자유학기제</S.FreeSemester>
      ) : (
        <S.Select {...register}>
          {/* <option>선택</option> */}

          <option value={5} selected={scoreArray && scoreArray[index] === 5}>
            A
          </option>
          <option value={4} selected={scoreArray && scoreArray[index] === 4}>
            B
          </option>
          <option value={3} selected={scoreArray && scoreArray[index] === 3}>
            C
          </option>
          {/* 예체능이 아니면 D,E Option까지 보이게 */}
          {!artSports && (
            <>
              <option
                value={2}
                selected={scoreArray && scoreArray[index] === 2}
              >
                D
              </option>
              <option
                value={1}
                selected={scoreArray && scoreArray[index] === 1}
              >
                E
              </option>
            </>
          )}
          <option value={0} selected={scoreArray && scoreArray[index] === 0}>
            없음
          </option>
        </S.Select>
      )}
    </>
  );
};

export default ScoreSelect;
