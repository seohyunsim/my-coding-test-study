function solution(s) {
  const onlyNum = s.split("").every((n) => !isNaN(n));
  return (s.length === 4 || s.length === 6) && onlyNum ? true : false;
}
