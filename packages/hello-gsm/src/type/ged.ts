interface GEDScore {
  totalScore: number;
  percentileRank: number;
  gedTotalScore: number;
  gedMaxScore: number;
}

interface CommonScore {
  totalScore: number;
  percentileRank: number;
  grade1Semester1Score: number;
  grade1Semester2Score: number;
  grade2Semester1Score: number;
  grade2Semester2Score: number;
  grade3Semester1Score: number;
  artisticScore: number;
  curricularSubtotalScore: number;
  attendanceScore: number;
  volunteerScore: number;
  extracurricularSubtotalScore: number;
}

export const isGED = (target: GEDScore | CommonScore): target is GEDScore => {
  return (target as GEDScore).gedTotalScore !== undefined;
};
