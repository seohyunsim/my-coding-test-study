const n = parseInt(require("fs").readFileSync("/dev/stdin").toString());

const solution = (n) => {
  n === 0 ? (n = 1) : (n *= solution(n - 1));
  return n;
};

console.log(solution(n));
