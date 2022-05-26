// 소수점 넷째 자리에서 반올림 후 형변환
const Rounds = (num: number) => {
  return Number(num.toFixed(4));
};

export default Rounds;
