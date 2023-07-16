/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function (citations) {
  const sortCitations = citations.sort((a, b) => b - a);
  let h_index = 0;

  for (let i = 0; i < sortCitations.length; i++) {
    if (sortCitations[i] >= i + 1) {
      h_index = i + 1;
    }
  }
  return h_index;
};
