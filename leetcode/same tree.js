/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = (pNode, qNode) => {
    if (!pNode && !qNode) return true;
    if (!pNode || !qNode) return false;

    const left = dfs(pNode.left, qNode.left);
    const right = dfs(pNode.right, qNode.right);

    return left && right && pNode.val === qNode.val;
  };

  return dfs(p, q);
};
