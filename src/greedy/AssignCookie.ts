/**
 * 输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数 量。
 * @link https://leetcode.com/problems/assign-cookies/
 * @param g 孩子胃口
 * @param s 饼干尺寸
 */
function findContentChildren(g: number[], s: number[]): number {
  const children = g.sort((a, b) => a - b);
  const cookies = s.sort((a, b) => a - b);

  let childIndex = 0;
  let cookieIndex = 0;

  while (childIndex < children.length && cookieIndex < cookies.length) {
    if (children[childIndex] <= cookies[cookieIndex]) {
      childIndex++;
    }

    cookieIndex++;
  }

  return childIndex;
}

(function () {
  const res = findContentChildren([1, 2], [1, 2, 3]);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
