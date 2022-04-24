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
 * 平衡二叉树
 * https://leetcode.com/problems/balanced-binary-tree/
 * @param root
 */
function isBalanced(root: TreeNode | null): boolean {
  return !innerCheck(root).breakTree;
}

function innerCheck(root: TreeNode | null): {
  depth: number;
  breakTree: boolean;
} {
  if (!root) {
    return { depth: 0, breakTree: false };
  }

  const leftInfo = innerCheck(root.left);
  const rightInfo = innerCheck(root.right);

  return {
    depth: 1 + Math.max(leftInfo.depth, rightInfo.depth),
    breakTree:
      leftInfo.breakTree ||
      rightInfo.breakTree ||
      Math.abs(leftInfo.depth - rightInfo.depth) > 1,
  };
}
