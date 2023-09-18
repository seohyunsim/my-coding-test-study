function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function createBinaryTreeFromArray(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
const root = createBinaryTreeFromArray(arr);

var lowestCommonAncestor = function (root, p, q) {
  const pNode = {};
  const qNode = {};
  let parentNode = 0;

  const dfs = (node, parent) => {
    if (!node) return;

    dfs(node.left, node);
    dfs(node.right, node);

    if (node === p) {
      pNode.node = node.val;
      pNode.parent = parent.val;
    }

    if (node === q) {
      qNode.node = node.val;
      qNode.parent = parent.val;
    }
    parentNode = parent.val;
  };
  dfs(root, root);

  //   console.log(pNode, qNode, parentNode);

  if (pNode.parent === qNode.parent) return pNode.parent;
  else if (pNode.node === qNode.parent) return pNode.node;
  else if (pNode.parent === qNode.node) return qNode.node;
  else return parentNode;
};

console.log(lowestCommonAncestor(root, 2, 8));
