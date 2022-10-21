function solution (d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      answer++;
      budget -= d[i];
    }
  }
  return answer;
};
