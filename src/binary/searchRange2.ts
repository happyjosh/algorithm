/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
 * 在排序数组中查找元素的第一个和最后一个位置，官方方式
 * @param nums
 * @param target
 */
function searchRange2(nums: number[], target: number): number[] {
  let res = [-1, -1];
  const left = binarySearch(nums, target, true); // 第一个>=target的位置
  const right = binarySearch(nums, target) - 1; // 第一个>target的位置-1

  if (nums[left] === target && nums[right] === target && left <= right) {
    res = [left, right];
  }

  return res;
}

function binarySearch(nums: number[], target: number, lower?: boolean): number {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;// 全部都是target的情况

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      res = mid;
    } else {
      left = mid + 1;
    }
  }

  return res;
}

console.log('-------------------begin--------------------res');
console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
console.log('-------------------end--------------------');
