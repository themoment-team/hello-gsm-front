import Rounds from './Rounds';
import ToNum from './ToNum';

// 성적 계산
const Calculate = (array: Array<number>, grade: number) => {
  ToNum(array);
  const sum = array.reduce((accumulator, curr) => accumulator + curr); // 배열 총합계 저장
  let result = 0; // 결과
  switch (grade) {
    case 2:
      result = 54 * (sum / (array.length * 5)); // 2학년 공식 적용
      break;
    case 3:
      result = 72 * (sum / (array.length * 5)); // 3학년 공식 적용
      break;
    case 4:
      result = 60 * (sum / (array.length * 5)); // 예체능 공식 적용
      break;
  }
  return Rounds(result);
};

export default Calculate;
