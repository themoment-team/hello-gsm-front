/**
 *
 * @param array - 공식 적용할 배열
 * @returns number - 봉사점수 환산
 */
const Volunteer = (array: Array<number>) => {
  let result = 0;

  array.map((_, i) => {
    const score = array[i];
    if (score >= 7) result += 10;
    else if (score >= 6) result += 8;
    else if (score >= 5) result += 6;
    else if (score >= 4) result += 4;
    else result += 2;
  });
  return result;
};

export default Volunteer;
