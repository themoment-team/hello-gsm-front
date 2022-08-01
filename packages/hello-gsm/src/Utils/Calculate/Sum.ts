/**
 *
 * @param array - 공식 적용할 배열
 * @returns number - 배열의 합 저장
 */

const Sum = (array: Array<number>) => 
  array?.reduce((accumulator, curr) => accumulator + curr, 0);

export default Sum;
