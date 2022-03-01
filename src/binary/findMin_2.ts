/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/submissions/
 * 寻找旋转排序数组中的最小值 II
 * @param nums
 */
function findMin_2(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let min: number = Number.MAX_VALUE;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      min = Math.min(nums[l], min);
      l++;
      r--;
      continue;
    }

    if (nums[l] <= nums[m]) {
      // 左边是有序
      // 左边的最小值
      min = Math.min(min, nums[l]);
      l = m + 1; // 继续判断右边无序数列
    } else {
      // 右边是有序
      // 右边的最小值
      min = Math.min(min, nums[m]);
      r = m - 1; // 继续判断左边无序数列
    }
  }

  return min;
}

console.log('-------------------begin--------------------res');
console.log(findMin_2([3,1,3]));
console.log('-------------------end--------------------');
