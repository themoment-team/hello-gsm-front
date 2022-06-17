/**
 *
 * @param array - 공식 적용할 배열
 * @returns number - string형인 배열을 number로 변환
 */

const ToNum = (array: Array<number>) => {
  return array?.map((arr, i) => (array[i] = Number(arr)));
};

export default ToNum;
