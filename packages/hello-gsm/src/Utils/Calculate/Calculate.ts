import { Sum, Rounds } from 'Utils/Calculate';

/**
 *
 * @param array - 2학년1학기, 2학년2학기, 3학년1학기, 예체능 점수 배열
 * @param mode - 공식 구별 2 = 2학년, 3 = 3학년, 4 = 예체능
 * @returns number - 교과 성적 계산
 */
const Calculate = (array: Array<number>, mode: number) => {
  array = array.filter(arr => arr !== 0); // 값이 0('없음')이면 배열에서 제거
  const arraySum = Sum(array); // 배열 합계 구하기

  let result = 0;

  switch (mode) {
    case 2:
      result = Rounds(54 * Rounds(arraySum / (array.length * 5), 5), 3); // 2학년 공식 적용
      break;
    case 3:
      result = Rounds(72 * Rounds(arraySum / (array.length * 5), 5), 3); // 3학년 공식 적용
      break;
    case 4:
      result = Rounds(60 * Rounds(arraySum / (array.length * 5), 3), 3); // 예체능 공식 적용
      break;
  }

  return result;
};

export default Calculate;
