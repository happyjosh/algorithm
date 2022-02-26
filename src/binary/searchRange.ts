/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
 * 在排序数组中查找元素的第一个和最后一个位置
 * @param nums
 * @param target
 */
function searchRange(nums: number[], target: number): number[] {
  let l = 0;
  let r = nums.length - 1;
  let begin = -1;
  let end = -1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      begin = mid;
      end = mid;

      while (begin >= 0 && nums[begin - 1] === target) {
        begin--;
      }
      while (end < nums.length && nums[end + 1] === target) {
        end++;
      }

      return [begin, end];
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return [begin, end];
}

console.log('-------------------begin--------------------res');
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log('-------------------end--------------------');
