const today = new Date('2023/11/01 10:00:00');

// 10월 16일 9시부터 10월 19일 17시 까지
// 원서 접수 및 증빙서류 제출 날짜
export const startApply = new Date('2023/10/16 9:00:00');
export const endApply = new Date('2023/10/19 17:00:00');
export const applyAcceptable = today >= startApply && today <= endApply;

// 10월 24일 10시부터 11월 1일 9시 59분까지
// 첫번쨰 합격 결과 보여주는 날짜
export const startFirstResult = new Date('2023/10/23 10:00:00');
export const endFirstResult = new Date('2023/11/01 10:00:00');
export const isStartFirstResult = today >= startFirstResult;
export const isFirstResult =
  today >= startFirstResult && today < endFirstResult;

// 11월 1일 10시부터 두번째 합격 결과 보여주는 날짜
