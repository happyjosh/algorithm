/**
 * 二叉树的直径
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * @param root
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const maxInfo = { max: 0 };
  height(maxInfo, root);
  return maxInfo.max;
}

function height(maxInfo: { max: number }, root: TreeNode | null) {
  if (!root) {
    return 0;
  }

  const l = height(maxInfo, root.left);
  const r = height(maxInfo, root.right);
  maxInfo.max = Math.max(maxInfo.max, l + r);

  return Math.max(l, r) + 1;
}
