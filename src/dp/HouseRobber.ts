/**
 * 假如你是一个劫匪，并且决定抢劫一条街上的房子，
 * 每个房子内的钱财数量各不相同。如果 你抢了两栋相邻的房子，
 * 则会触发警报机关。求在不触发机关的情况下最多可以抢劫多少钱
 * @link https://leetcode.com/problems/house-robber/
 * @param nums
 */
function houseRobber(nums: number[]): number {
  // dp(n) = max(nums[n]+nums[n-2],nums[n-1])
  // dp(0) = nums[0];
  // dp(1) = nums[1];

  // if (nums.length === 0) {
  //   return 0;
  // }
  // if (nums.length === 1) {
  //   return nums[0];
  // }
  // if (nums.length === 2) {
  //   return Math.max(nums[0], nums[1]);
  // }
  //
  // const dp: number[] = Array(nums.length).fill(0);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);
  //
  // for (let i = 2; i < nums.length; i++) {
  //   dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  // }
  //
  // return dp[dp.length - 1];

  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let pre0 = nums[0];
  let pre1 = Math.max(nums[0], nums[1]);
  let cur = pre1;

  for (let i = 2; i < nums.length; i++) {
    cur = Math.max(nums[i] + pre0, pre1);
    pre0 = pre1;
    pre1 = cur;
  }

  return cur;
}

(function () {
  const res = houseRobber([2, 1, 1, 2]);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
