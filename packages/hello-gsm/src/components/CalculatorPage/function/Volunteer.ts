// 봉사점수 환산
const Volunteer = (array: Array<number>) => {
  let result = 0;
  array.map((arr, i) => {
    array[i] = Number(arr);
  }); // 배열을 number형변환
  array.map((arr, i) => {
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
