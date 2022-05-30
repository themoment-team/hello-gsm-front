import Sum from './Sum';
import ToNum from './ToNum';

// 출석점수 환산
const Attendance = (absent: Array<number>, attendance: Array<number>) => {
  let result = 30;
  ToNum(absent);
  ToNum(attendance);

  const absentSum = Sum(absent);
  if (absentSum >= 10) return 0;

  const attendanceSum = Math.floor(Sum(attendance) / 3); // 배열 총합계 저장, 소수점 버림

  result = result - 3 * (absentSum + attendanceSum);
  if (result < 0) return 0; // 결과가 음수이면 0 반환
  return result;
};

export default Attendance;
