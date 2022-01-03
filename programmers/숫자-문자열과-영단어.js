function solution(s) {
  const num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const keys = Object.keys(num);
  let answer = "";
  let str = "";

  for (let chr of s) {
    if (isNaN(chr)) {
      str += chr;
      if (keys.includes(str)) {
        answer += num[str];
        str = "";
      }
    } else answer += chr;
  }

  return parseInt(answer);
}
