function solution(n) {
  const nStr = n.toString();
  let answer = 0;

  for (let i = 0; i < nStr.length; i++) {
    answer += parseInt(nStr[i]);
  }
  return answer;
}
