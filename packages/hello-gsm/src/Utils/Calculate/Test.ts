import {
  FreeGradeCalculate,
  FreeSemesterCalculate,
  UnAppliedCalculate,
} from 'Utils/Calculate';

/**
 *
 * @param array - 2학년1학기, 2학년2학기, 3학년1학기, 예체능 점수 배열
 * @param mode - 공식 구별 2 = 2학년, 3 = 3학년, 4 = 예체능
 * @returns number - 교과 성적 계산
 */

/**
 *
 * @param array - 각 학기 교과 점수 배열
 * @param semester - 학기
 * @param system - 자유학기제 | 자유학년제
 * @param freeSemester 자유학기제 학기
 * @returns - 교과 성적 계산
 */
const Test = (
  array: Array<number>,
  semester: string,
  system: string,
  freeSemester: string | null,
) => {
  // 자유학기제 및 자유학년제 미적용
  if (!freeSemester) return UnAppliedCalculate(array, semester);
  let result;

  switch (system) {
    case '자유학년제':
      result = FreeGradeCalculate(array, semester, freeSemester);
      break;
    case '자유학기제':
      result = FreeSemesterCalculate(array, semester, freeSemester);
      break;
  }
  return result;
};

export default Test;
