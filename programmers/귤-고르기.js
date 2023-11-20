function solution(k, tangerine) {
  const obj = {};
  let answer = 0;

  for (let i = 0; i < tangerine.length; i++) {
    if (obj[tangerine[i]]) {
      obj[tangerine[i]] += 1;
    } else {
      obj[tangerine[i]] = 1;
    }
  }

  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  let maxWeight = k;
  for (let i = 0; i < entries.length; i++) {
    if (maxWeight > 0) {
      answer++;
      maxWeight -= entries[i][1];
    } else {
      break;
    }
  }

  return answer;
}
