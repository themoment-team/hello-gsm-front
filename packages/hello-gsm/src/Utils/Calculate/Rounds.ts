/**
 *
 * @param num - 공식 적용할 숫자
 * @returns number - 소숫점 넷째자리에서 반올림
 */
const Rounds = (num: number) => {
  return Number(num.toFixed(4));
};

export default Rounds;
