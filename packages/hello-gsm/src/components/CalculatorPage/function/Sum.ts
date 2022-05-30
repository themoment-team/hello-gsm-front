const Sum = (array: Array<number>) => {
  return array?.reduce((accumulator, curr) => accumulator + curr); // 배열 총합계 저장
};

export default Sum;
