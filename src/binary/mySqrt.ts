/**
 * https://leetcode.com/problems/sqrtx/
 * 求开方
 * @param x
 */
function mySqrt(x: number): number {
  if (x <= 0) {
    return x;
  }
  // 0,1,2,3,4,5,6,7,8

  // x 平方根的整数部分  是满足 k^2 ≤x 的最大 kk 值
  let l = 1;
  let r = x;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    const x2 = mid * mid;
    if (x2 === x) {
      return mid;
    } else if (x2 < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}

console.log('-------------------begin--------------------');
console.log(mySqrt(8));
console.log('-------------------end--------------------');
