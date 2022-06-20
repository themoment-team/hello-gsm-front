import Rounds from './Rounds';
import Sum from './Sum';
import ToNum from './ToNum';

/**
 *
 * @param array - 2학년1학기, 2학년2학기, 3학년1학기, 예체능 점수 배열
 * @param mode - 공식 구별
 * @returns number - 교과 성적 계산
 */
const Calculate = (array: Array<number>, mode: number) => {
  ToNum(array);
  array = array.filter(arr => arr && !isNaN(arr)); // 배열에서 NaN 제거
  const arraySum = Sum(array); // 배열 합계 구하기

  let result = 0;

  switch (mode) {
    case 2:
      result = Rounds(54 * Rounds(arraySum / (array.length * 5), 5), 3); // 2학년 공식 적용
      break;
    case 3:
      result = Rounds(72 * Rounds(arraySum / (array.length * 5), 5), 3); // 3학년 공식 적용      break;
      break;
    case 4:
      result = Rounds(60 * Rounds(arraySum / (array.length * 5), 3), 3); // 예체능 공식 적용
      break;
  }

  return result;
};

export default Calculate;
