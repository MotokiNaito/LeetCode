/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  return dfs(root, 0);

  function dfs(root, height) {
    if (root == null) {
      return height;
    }
    return Math.max(dfs(root.left, height + 1), dfs(root.right, height + 1));
  }
};