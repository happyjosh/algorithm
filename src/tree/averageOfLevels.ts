/**
 * 二叉树的层平均值
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 * @param root
 */
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const temp: TreeNode[] = [];
  const res: number[] = [];

  temp.push(root);
  while (!!temp.length) {
    // 每层一次for
    const floorCount = temp.length;
    let floorSum = 0;
    for (let i = 0; i < floorCount; i++) {
      const node = temp.shift()!;
      floorSum += node.val;

      if (node.left) {
        temp.push(node.left);
      }

      if (node.right) {
        temp.push(node.right);
      }
    }

    res.push(floorSum / floorCount);
  }

  return res;
}
