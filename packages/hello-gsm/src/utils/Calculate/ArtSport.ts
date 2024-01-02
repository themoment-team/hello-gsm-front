import { Sum, Rounds } from 'utils//Calculate';

/**
 *
 * @param array - 예체능 점수 배열
 * @returns - 예체능 공식 계산 점수
 */
const ArtSport = (array: Array<number>) => {
  array = array.filter(arr => arr !== 0); // 값이 0('없음')이면 배열에서 제거
  const arraySum = Sum(array); // 배열 합계 구하기

  return Rounds(60 * Rounds(arraySum / (array.length * 5), 3), 3); // 예체능 공식 적용
};

export default ArtSport;
