/**
 * https://leetcode.com/problems/merge-sorted-array/
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let cursor = 1;
  while (m > 0 || n > 0) {
    if (nums1[m - 1] > nums2[n - 1] || n === 0) {
      nums1[nums1.length - cursor] = nums1[m - 1];
      m--;
    } else {
      nums1[nums1.length - cursor] = nums2[n - 1];
      n--;
    }
    cursor++;
  }
}

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log('-------------------begin--------------------');
console.log(nums1);
console.log('-------------------end--------------------');
