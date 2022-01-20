function solution(n) {
  const triad = n.toString(3);
  const reversal = triad.split("").reverse().join("");

  return parseInt(reversal, 3);
}
