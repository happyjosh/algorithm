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

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(5), new TreeNode(6)),
  new TreeNode(4)
);

/**
 * 深度优先
 * @param root
 */
function dfs(root: TreeNode | null) {
  if (!root) {
    return;
  }

  const res: TreeNode[] = [];
  res.push(root);

  console.log('-------------------begin--------------------');
  console.log(root);
  console.log('-------------------end--------------------');
  while (!!res.length) {
    const node = res.pop()!;
    console.log(node.val);

    if (node.right) {
      res.push(node.right);
    }

    if (node.left) {
      res.push(node.left);
    }
  }
}

function bfs(root: TreeNode | null) {
  if (!root) {
    return;
  }

  const res: TreeNode[] = [];

  res.push(root);

  while (!!res.length) {
    const node = res.shift()!;

    console.log(node.val);

    if (node.left) {
      res.push(node.left);
    }

    if (node.right) {
      res.push(node.right);
    }
  }
}

// dfs(root);
bfs(root);
