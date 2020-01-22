/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  let res = [];
  helper(root, 0, res);
  return res;
};

const helper = function (node, level, res) {
  if (!node) return;
  if (!res[level]) res[level] = [];
  res[level].push(node.val);
  helper(node.left, level + 1, res);
  helper(node.right, level + 1, res);
}