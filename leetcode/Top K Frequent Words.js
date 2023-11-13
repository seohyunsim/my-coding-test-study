/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const config = {};
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    const el = words[i];

    if (config[el]) {
      config[el] += 1;
    } else config[el] = 1;
  }

  const objectToArray = Object.entries(config);
  objectToArray.sort((a, b) => {
    if (b[1] - a[1] !== 0) {
      return b[1] - a[1]; // 값이 큰 순서대로 정렬
    } else {
      return a[0].localeCompare(b[0]); // 값이 같으면 사전순으로 정렬
    }
  });
  const sortConfig = Object.fromEntries(objectToArray);
  const keys = Object.keys(sortConfig);

  for (let i = 0; i < k; i++) {
    answer.push(keys[i]);
  }

  return answer;
};
