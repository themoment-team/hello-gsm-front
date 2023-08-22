import { CommonScore, GEDScore } from './application';

export const isGED = (target: GEDScore | CommonScore): target is GEDScore => {
  return (target as GEDScore).gedTotalScore !== undefined;
};
