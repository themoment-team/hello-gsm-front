export interface ScoreType {
  score1_1?: number;
  score1_2?: number;
  score2_1?: number;
  score2_2: number;
  score3_1: number;
  generalCurriculumScoreSubtotal: number;
  artSportsScore: number;
  attendanceScore: number;
  curriculumScoreSubtotal: number;
  volunteerScore: number;
  nonCurriculumScoreSubtotal: number;
  scoreTotal: number;
  rankPercentage: number;
}

export interface GEDScoreType {
  curriculumScoreSubtotal: number; // 전과목 득점 합계
  nonCurriculumScoreSubtotal: number; // 전과목 만점 합계
  rankPercentage: number; // 백분율
}
