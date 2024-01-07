import { Rounds, Sum } from 'Utils/Calculate';

/**
 *
 * @param array - 점수 배열
 * @param semester - 학기
 * @param freeSemester - 자유학기제를 시행한 학기
 * @returns - 자유학기제 점수 계산
 */
const FreeSemesterCalculate = (
  array: Array<number>,
  semester: string,
  freeSemester: string | null,
) => {
  array = array.filter(arr => arr !== 0); // 값이 0('없음')이면 배열에서 제거
  const arraySum = Sum(array); // 배열 합계 구하기

  let result = 0;
  if (freeSemester === semester) return 0; // 자유학기제를 시행한 학기는 0점 처리

  switch (semester) {
    case '1-1':
      result = Rounds(18 * Rounds(arraySum / (array.length * 5), 5), 3);
      break;
    case '1-2':
      switch (freeSemester) {
        // 1학년 2학기 점수는 자유학기제 시행한 학기에 따라 다르게 처리함
        case '1-1':
          result = Rounds(18 * Rounds(arraySum / (array.length * 5), 5), 3);
          break;
        case '2-1':
          result = Rounds(36 * Rounds(arraySum / (array.length * 5), 5), 3);
          break;
      }
      break;
    case '2-1':
      result = Rounds(36 * Rounds(arraySum / (array.length * 5), 5), 3);
      break;
    case '2-2':
      result = Rounds(54 * Rounds(arraySum / (array.length * 5), 5), 3);
      break;
    case '3-1':
      result = Rounds(72 * Rounds(arraySum / (array.length * 5), 5), 3);
      break;
  }
  return result;
};

export default FreeSemesterCalculate;
