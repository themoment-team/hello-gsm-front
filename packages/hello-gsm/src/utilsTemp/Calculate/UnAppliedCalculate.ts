import { Sum, Rounds } from 'Utils/Calculate';

/**
 *
 * @param array - 점수 배열
 * @param semester - 학기
 * @returns - 자유학기제 및 자유학년제 미적용 공식 계산
 */
const UnAppliedCalculate = (array: Array<number>, semester: string) => {
  array = array?.filter(arr => arr !== 0); // 값이 0('없음')이면 배열에서 제거
  const arraySum = Sum(array); // 배열 합계 구하기
  let result;
  switch (semester) {
    case '1-1':
      result = Rounds(18 * Rounds(arraySum / (array?.length * 5), 5), 3);
      break;
    case '1-2':
      result = Rounds(18 * Rounds(arraySum / (array?.length * 5), 5), 3);
      break;
    case '2-1':
      result = Rounds(36 * Rounds(arraySum / (array?.length * 5), 5), 3);
      break;
    case '2-2':
      result = Rounds(36 * Rounds(arraySum / (array?.length * 5), 5), 3);
      break;
    case '3-1':
      result = Rounds(72 * Rounds(arraySum / (array?.length * 5), 5), 3);
      break;
  }
  return result;
};

export default UnAppliedCalculate;
