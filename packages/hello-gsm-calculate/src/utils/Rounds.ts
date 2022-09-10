/**
 *
 * @param num - 공식 적용할 숫자
 * @param RoundNum - 소숫점 반올림
 * @returns - 소숫점 RoundNum+1 자리에서 반올림 하여 RoundNum째 자리까지 보임
 */
const Rounds = (num: number, RoundNum: number) => {
  return Number(num.toFixed(RoundNum));
};

export default Rounds;
