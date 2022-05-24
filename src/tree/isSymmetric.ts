/**
 * 对称二叉树
 * https://leetcode.com/problems/symmetric-tree/
 * @param root
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return inner(root.left ?? null, root.right ?? null);
}
function inner(l: TreeNode | null, r: TreeNode | null): boolean {
  if (!l && !r) {
    return true;
  }
  if (!l || !r) {
    return false;
  }
  return l.val === r.val && inner(l.left, r.right) && inner(l.right, r.left);
}
