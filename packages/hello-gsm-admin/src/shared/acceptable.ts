const today = new Date();

// 10월 20일 부터
// 수험표 출력할 수 있는 기간, 1차 시험 결과를 조회할 수 있는 기간, 1차 서류제출 여부를 할당하는 기간

const startFirstResult = new Date('2023/10/20 00:00:00');
export const isStartFirstResult = today >= startFirstResult;

// 1월 1일 부터
// 2차 시험 결과를 조회할 수 있는 기간
const startFinalResult = new Date('2023/10/20 00:00:00');
export const isStartFinalResult = today >= startFinalResult;

//
// 10월 27일부터 10월 31일까지
// 성적 입력 기간
export const isDuringFinalResult =
  today <= new Date('2023/10/27 16:00:00') ||
  today >= new Date('2023/10/31 22:10:00');
