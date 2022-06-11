/**
 * 从前序与中序遍历序列构造二叉树
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param preorder
 * @param inorder
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const inIndexCache: Record<number, number> = {};
  for (let i = 0; i < inorder.length; i++) {
    inIndexCache[inorder[i]] = i;
  }

  return help(inIndexCache, preorder, inorder, 0, 0, inorder.length - 1);
}

function help(
  inIndexCache: Record<number, number>,
  preorder: number[],
  inorder: number[],
  preIndex: number,
  beginIndex: number,
  endIndex: number
): TreeNode | null {
  if (beginIndex > endIndex) {
    return null;
  }
  const root = new TreeNode(preorder[preIndex]);

  const i = inIndexCache[root.val];
  const leftEndIndex = i - 1;
  const rightBeginIndex = i + 1;
  const leftCount = leftEndIndex - beginIndex + 1; // 左侧子树的数量

  const leftPreIndex = preIndex + 1;
  const rightPreIndex = preIndex + 1 + leftCount;

  root.left = help(
    inIndexCache,
    preorder,
    inorder,
    leftPreIndex,
    beginIndex,
    leftEndIndex
  );
  root.right = help(
    inIndexCache,
    preorder,
    inorder,
    rightPreIndex,
    rightBeginIndex,
    endIndex
  );

  return root;
}
