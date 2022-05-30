// 배열을 number로 형변환
const ToNum = (array: Array<number>) => {
  array.map((arr, i) => (array[i] = Number(arr)));
  return array;
};

export default ToNum;
