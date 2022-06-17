const useToString = (scores: Array<number | string> | undefined) => {
  scores?.map((score, i) => {
    switch (score) {
      case 5:
        scores[i] = 'A';
        break;
      case 4:
        scores[i] = 'B';
        break;
      case 3:
        scores[i] = 'C';
        break;
      case 2:
        scores[i] = 'D';
        break;
      case 1:
        scores[i] = 'E';
        break;
      case null:
        scores[i] = '없음';
        break;
    }
  });
  return scores;
};

export default useToString;
