const today = new Date('2023/10/16 9:00:00');

// 다음년도 3월 1일
// 입학 전형이 끝난 이후
const finalEnd = new Date('2024/03/01 00:00:00');
export const isFinalEnd = today > finalEnd;
