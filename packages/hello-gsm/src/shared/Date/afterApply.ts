const today = new Date();

// 11월 1일 10시
// 최종 합격 보여주는 날짜
const startFinalResult = new Date('2023/11/01 10:00:00');
export const isStartFinalResult = today > startFinalResult;

// 다음년도 3월 1일
// 입학 전형이 끝난 이후
const finalEnd = new Date('2024/03/01 00:00:00');
export const isFinalEnd = today > finalEnd;
