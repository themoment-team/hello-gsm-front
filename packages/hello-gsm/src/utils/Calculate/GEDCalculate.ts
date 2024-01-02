import { Rounds } from 'utils//Calculate';

const GEDCalculate = (score: number, perfectScore: number) => {
  return score && perfectScore && Rounds((1 - score / perfectScore) * 100, 3);
};

export default GEDCalculate;
