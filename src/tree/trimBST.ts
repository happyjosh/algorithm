/**
 * 修剪二叉搜索树
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 * @param root
 * @param low
 * @param high
 */
function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) {
    return null;
  }

  // 被修剪调的节点，代表某一边（大于或者小于）树枝也会整个背修剪掉
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}
