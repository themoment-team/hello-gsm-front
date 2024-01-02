import dayjs from 'dayjs';

/**
 *
 * @param date - 포맷팅할 날짜
 * @param mode - hours: 시간까지, notYear: 년도 없이, minutes: 분까지
 * @returns - 포맷된 날짜
 */
const formatDate = (date: Date, mode?: 'hours' | 'notYear' | 'minutes') => {
  switch (mode) {
    case 'hours':
      return dayjs()
        .set('year', Number(date.getFullYear()))
        .set('month', Number(date.getMonth()))
        .set('date', date.getDate())
        .set('hours', date.getHours())
        .format('YYYY. MM. DD. HH시');
    case 'notYear':
      return dayjs()
        .set('month', Number(date.getMonth()))
        .set('date', date.getDate())
        .set('hours', date.getHours())
        .format('MM월 DD일 HH시');
    case 'minutes':
      return dayjs()
        .set('year', Number(date.getFullYear()))
        .set('month', Number(date.getMonth()))
        .set('date', date.getDate())
        .set('hours', date.getHours())
        .set('minutes', date.getMinutes())
        .format('YYYY. MM. DD. HH시 mm분');
    default:
      return dayjs()
        .set('year', date.getFullYear())
        .set('month', date.getMonth())
        .set('date', date.getDate())
        .format('YYYY. MM. DD.');
  }
};
export default formatDate;
