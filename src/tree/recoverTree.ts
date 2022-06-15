/**
 * 恢复二叉搜索树
 * https://leetcode.com/problems/recover-binary-search-tree/
 * @param root
 */
function recoverTree(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  const as: TreeNode[] = [];
  inorder(root, as);

  // find wrong node
  let wrongNode0: TreeNode | null = null;
  let wrongNode1: TreeNode | null = null;
  for (let i = 0; i < as.length; i++) {
    // 第一次
    if (
      wrongNode0 === null &&
      i !== as.length - 1 &&
      as[i].val > as[i + 1].val
    ) {
      wrongNode0 = as[i];
    }

    // 最后一次
    if (i !== 0 && as[i].val < as[i - 1].val) {
      wrongNode1 = as[i];
    }
  }

  if (!wrongNode0 || !wrongNode1) {
    return;
  }

  const temp = wrongNode0.val;
  wrongNode0.val = wrongNode1.val;
  wrongNode1.val = temp;
}

function inorder(root: TreeNode, as: TreeNode[]) {
  if (root.left) {
    inorder(root.left, as);
  }

  as.push(root);

  if (root.right) {
    inorder(root.right, as);
  }
}
