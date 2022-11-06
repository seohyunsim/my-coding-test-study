const solution = (x, n) => {
  const answer = [];
  let num = 0;

  for (let i = 0; i < n; i++) {
    num += x;
    answer.push(num);
  }
  return answer;
};
