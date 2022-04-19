class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 二叉树的最大深度
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
 * @param root
 */
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
