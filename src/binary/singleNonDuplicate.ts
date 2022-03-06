/**
 * 有序数组中的单一元素
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 * @param nums
 */
function singleNonDuplicate(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  // 输入: nums = [1,1,2,3,3,4,4,8,8]
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }
    if (nums[mid] === nums[mid + 1]) {
      if (mid % 2 === 0) {
        // 在右边
        l = mid + 2;
      } else {
        // 在左边
        r = mid - 1;
      }
    } else if (nums[mid] === nums[mid - 1]) {
      if (mid % 2 === 0) {
        // 在左边
        r = mid - 2;
      } else {
        // 再右边
        l = mid + 1;
      }
    }
  }

  return -1;
}

console.log('-------------------begin--------------------res');
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log('-------------------end--------------------');
