const Sum = (array: Array<number>) => {
  return array?.reduce((accumulator, curr) => accumulator + curr, 0); // 배열 총합계 저장
};

export default Sum;
