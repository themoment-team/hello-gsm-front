import Rounds from './Rounds';
const GEDCalculate = (score: number, perfectScore: number) => {
  const result = Rounds((1 - score / perfectScore) * 100, 3);
  return result;
};

export default GEDCalculate;
