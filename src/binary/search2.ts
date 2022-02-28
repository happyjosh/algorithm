/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 搜索旋转排序数组-允许相等
 * @param nums
 * @param target
 */
function search2(nums: number[], target: number): boolean {
  // 6,6,6,8,9,1,2,
  // 3,1,2,3,3,3,3
  if (nums.length === 0) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      // 无法判断有序数组
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      // 左边有序数组
      if (target >= nums[left] && target < nums[mid]) {
        // 在左区间内
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右边有序数组
      // 上面if判断已经把mid算作左边，这里就该从mid+1开始对比
      if (target >= nums[mid + 1] && target <= nums[right]) {
        // 在右区间内
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

console.log('-------------------begin--------------------');
console.log(search2([0, 1, 1], 0));
console.log('-------------------end--------------------');
