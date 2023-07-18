/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const newArray = matrix.flat().sort((a, b) => a - b);

  return newArray[k - 1];
};
