/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/submissions/
 * 寻找旋转排序数组中的最小值 II-递归
 * @param nums
 */
function findMin(nums: number[]): number {
  return innerFind(nums, 0, nums.length - 1);
}

function innerFind(nums: number[], l: number, r: number): number {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      return Math.min(nums[l], innerFind(nums, l + 1, r - 1));
    }

    let minLeft: number;
    let minRight: number;
    if (nums[l] <= nums[m]) {
      // 左边是有序
      minLeft = nums[l]; // 左边的最小值
      minRight = innerFind(nums, m + 1, r);
    } else {
      // 右边是有序
      minRight = nums[m + 1];
      minLeft = innerFind(nums, l, m);
    }

    return Math.min(minLeft, minRight);
  }

  return nums[l];
}

console.log('-------------------begin--------------------res');
console.log(findMin([10, 1, 10, 10, 10]));
console.log('-------------------end--------------------');
