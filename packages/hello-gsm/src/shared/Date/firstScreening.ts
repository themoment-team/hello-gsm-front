const today = new Date('2023/9/27 19:00:00');

// 9월 27일 0시부터 오후 6시까지
// 원서 접수 및 증빙서류 제출 날짜
export const startApply = new Date('2023/9/27 00:00:00');
export const endApply = new Date('2023/9/27 18:00:00');
export const applyAcceptable = today >= startApply && today <= endApply;

// 9월 27일 6시부터 6시 반까지
// 첫번쨰 합격 결과 보여주는 날짜
export const startFirstResult = new Date('2023/9/27 18:00:00');
export const endFirstResult = new Date('2023/9/27 18:30:00');
export const isStartFirstResult = today >= startFirstResult;
export const isFirstResult =
  today >= startFirstResult && today < endFirstResult;
