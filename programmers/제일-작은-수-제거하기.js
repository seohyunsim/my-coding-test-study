function solution(arr) {
  const minNum = Math.min(...arr);

  if (arr.length === 1) return [-1];
  else return arr.filter((e) => e !== minNum);
}
