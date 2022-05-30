import Rounds from './Rounds';
import Sum from './Sum';
import ToNum from './ToNum';

// 성적 계산
const Calculate = (array: Array<number>, mode: number) => {
  ToNum(array);
  array = array.filter(arr => {
    return arr && !isNaN(arr);
  }); // 배열에서 NaN 제거
  const arraySum = Sum(array);

  let result = 0; // 결과

  switch (mode) {
    case 2:
      result = 54 * (arraySum / (array.length * 5)); // 2학년 공식 적용
      break;
    case 3:
      result = 72 * (arraySum / (array.length * 5)); // 3학년 공식 적용
      break;
    case 4:
      result = 60 * (arraySum / (array.length * 5)); // 예체능 공식 적용
      break;
  }
  return Rounds(result);
};

export default Calculate;
