/**
 * https://leetcode.com/problems/sum-of-square-numbers/
 * 平方数之和
 * @param c
 */
function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    let tempRes = Math.pow(left, 2) + Math.pow(right, 2);
    if (tempRes < c) {
      left++;
    } else if (tempRes > c) {
      right--;
    } else {
      return true;
    }
  }

  return false;
}

function judgeSquareSum2(c: number): boolean {
  for (let i = 0; i <= Math.sqrt(c); i++) {
    const right = Math.sqrt(c - Math.pow(i, 2));
    if (right === Math.floor(right)) {
      return true;
    }
  }

  return false;
}

console.log('-------------------begin--------------------res');
console.log(judgeSquareSum(5));
console.log('-------------------end--------------------');
