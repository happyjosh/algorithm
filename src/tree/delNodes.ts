/**
 * 删点成林
 * https://leetcode.com/problems/delete-nodes-and-return-forest/
 * @param root
 * @param to_delete
 */
function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = [];

  inner(root, to_delete, res, true);

  return res;
}

function inner(
  node: TreeNode | null,
  to_delete: number[],
  res: Array<TreeNode | null>,
  isRoot: boolean
) {
  if (!node) {
    return;
  }

  const deleted = to_delete.includes(node.val);
  if (isRoot && !deleted) {
    res.push(node);
  }

  const l = node.left;
  if (!!l) {
    if (to_delete.includes(l.val)) {
      node.left = null;
      inner(l.left, to_delete, res, true);
      inner(l.right, to_delete, res, true);
    } else {
      inner(l, to_delete, res, deleted);
    }
  }

  const r = node.right;
  if (!!r) {
    if (to_delete.includes(r.val)) {
      node.right = null;
      inner(r.left, to_delete, res, true);
      inner(r.right, to_delete, res, true);
    } else {
      inner(r, to_delete, res, deleted);
    }
  }
}
