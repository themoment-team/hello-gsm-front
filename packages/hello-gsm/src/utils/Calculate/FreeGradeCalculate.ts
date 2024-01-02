import { Sum, Rounds } from 'utils/Calculate';

/**
 *
 * @param array - 점수 배열
 * @param semester - 학기
 * @returns - 자유학년제 점수 계산
 */
const FreeGradeCalculate = (array: Array<number>, semester: string) => {
  array = array?.filter(arr => arr !== 0); // 값이 0('없음')이면 배열에서 제거
  const arraySum = Sum(array); // 배열 합계 구하기

  let result;

  switch (semester) {
    // 자유학년제는 1학년때 점수가 없기 때문에 null을 리턴함
    case '1-1':
    case '1-2':
      result = null;
      break;
    case '2-1':
    case '2-2':
      result = Rounds(54 * Rounds(arraySum / (array?.length * 5), 5), 3); // 2학년 점수
      break;
    case '3-1':
      result = Rounds(72 * Rounds(arraySum / (array?.length * 5), 5), 3); // 3학년 점수
      break;
  }

  return result;
};

export default FreeGradeCalculate;
