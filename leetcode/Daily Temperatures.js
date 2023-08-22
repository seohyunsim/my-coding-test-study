/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = [];

  for (let i = 0; i < temperatures.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        sum = j - i;
        break;
      }
    }
    answer.push(sum);
  }

  return answer;
};
