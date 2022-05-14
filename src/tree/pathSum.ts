/**
 * 路径总和 III
 * https://leetcode.com/problems/path-sum-iii/
 * @param root
 * @param targetSum
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  if (!root) {
    return count;
  }

  count += innerSum(root, targetSum);
  count += pathSum(root.left, targetSum);
  count += pathSum(root.right, targetSum);

  return count;
}

function innerSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let count = 0;
  const { left, right, val } = root;
  if (targetSum === val) {
    count++;
  }

  targetSum = targetSum - val;
  count += innerSum(left, targetSum);
  count += innerSum(right, targetSum);

  return count;
}
