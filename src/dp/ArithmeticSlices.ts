/**
 *
 * @link https://leetcode.com/problems/arithmetic-slices/
 */
function arithmeticSlices(nums: number[]) {
  const n = nums.length;
  if (n < 3) {
    return 0;
  }
  const dp = Array(n).fill(0);
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      // 将区间拓展成 (0,i),其中新增等差数列的区间为 (0,i), (1,i), ... (i-2,i)(0,i),(1,i),...(i−2,i)，
      // 这些区间总数为 x+1x+1。这是因为除了区间 (0,i)(0,i) 以外，其余的区间如 (1,i), (2,i),...(i-2,i)(1,i),(2,i),...(i−2,i)
      // 这些都可以对应到之前的区间 (0,i-1), (1,i-1),...(i-3,i-1)(0,i−1),(1,i−1),...(i−3,i−1) 上去，其值为 x
      dp[i] = dp[i - 1] + 1;
      res += dp[i];
    }
  }

  return res;
}

(function () {
  const res = arithmeticSlices([1, 2, 3, 4]);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
