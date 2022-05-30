import Rounds from './Rounds';
import Sum from './Sum';
import ToNum from './ToNum';

// 성적 계산
const Calculate = (
  array: Array<number>,
  newArray: Array<number>,
  grade: number,
) => {
  ToNum(array);
  ToNum(newArray);

  const arraySum = Sum(array);
  const newArraySum = Sum(newArray);

  let result = 0; // 결과
  const sum = arraySum + newArraySum;

  if (isNaN(newArraySum)) {
    switch (grade) {
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
  } else {
    switch (grade) {
      case 2:
        result = 54 * (sum / ((array.length + newArray.length) * 5)); // 2학년 공식 적용
        break;
      case 3:
        result = 72 * (sum / ((array.length + newArray.length) * 5)); // 3학년 공식 적용
        break;
      case 4:
        result = 60 * (sum / ((array.length + newArray.length) * 5)); // 예체능 공식 적용
        break;
    }
    return Rounds(result);
  }
};

export default Calculate;
