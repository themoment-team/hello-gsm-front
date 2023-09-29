const toStringArray = (
  scores: Array<number | string> | undefined,
): string[] | undefined => {
  const returnScores: string[] | undefined = [];
  scores?.map(score => {
    switch (score) {
      case 5:
        returnScores?.push('A');
        break;
      case 4:
        returnScores?.push('B');
        break;
      case 3:
        returnScores?.push('C');
        break;
      case 2:
        returnScores?.push('D');
        break;
      case 1:
        returnScores?.push('E');
        break;
      case 0:
        returnScores?.push('없음');
        break;
    }
  });
  return returnScores;
};

export default toStringArray;
