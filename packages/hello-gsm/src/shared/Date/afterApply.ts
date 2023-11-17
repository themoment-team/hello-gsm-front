const today = new Date();

// 다음년도 3월 1일
// 입학 전형이 끝난 이후
const finalEnd = new Date('2023/11/15 00:00:00');
export const isFinalEnd = today > finalEnd;
