import {
  FreeGradeCalculate,
  FreeSemesterCalculate,
  UnAppliedCalculate,
} from 'utils/Calculate';

/**
 *
 * @param array - 각 학기 교과 점수 배열
 * @param semester - 학기
 * @param system - 자유학기제 | 자유학년제
 * @param freeSemester 자유학기제를 시행한 학기
 * @returns - 교과 성적 계산
 */
const Calculate = (
  array: Array<number>,
  semester: string,
  system: string,
  freeSemester: string | null,
) => {
  // 자유학기제 및 자유학년제 미적용
  if (!freeSemester && system !== '자유학년제')
    return UnAppliedCalculate(array, semester);
  let result;

  switch (system) {
    case '자유학년제':
      result = FreeGradeCalculate(array, semester);
      break;
    case '자유학기제':
      result = FreeSemesterCalculate(array, semester, freeSemester);
      break;
  }
  return result;
};

export default Calculate;
