/**
 * 给定 n 节台阶，每次可以走一步或走两步，求一共有多少种方式可以走完这些台阶
 * https://leetcode.com/problems/climbing-stairs/
 * @param n
 */
function climbingStairs(n) {
  if (typeof n !== 'number') {
    return 0;
  }

  if (n < 3) {
    return n;
  }

  let pre1 = 1,
    pre2 = 2,
    total = 0;
  for (let i = 2; i < n; i++) {
    total = pre1 + pre2;
    pre1 = pre2;
    pre2 = total;
  }

  return total;
}

(function () {
  console.log('-------------------begin--------------------');
  console.log(climbingStairs(10));
  console.log('-------------------end--------------------');
})();
