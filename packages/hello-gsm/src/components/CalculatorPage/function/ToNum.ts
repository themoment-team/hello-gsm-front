// 배열을 number로 형변환
const ToNum = (array: Array<number>) => {
  return array?.map((arr, i) => (array[i] = Number(arr)));
};

export default ToNum;
