/**
 * 寻找两个正序数组的中位数
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param nums1
 * @param nums2
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if ((nums1.length + nums2.length) % 2 === 0) {
    // 偶数个
    const mid = (nums1.length + nums2.length) / 2;
    return (
      (getKthElement(nums1, nums2, mid) +
        getKthElement(nums1, nums2, mid + 1)) /
      2
    );
  } else {
    // 奇数个
    return getKthElement(
      nums1,
      nums2,
      Math.floor((nums1.length + nums2.length) / 2) + 1
    );
  }
}

/**
 * 寻找第k小的元素
 * @param num1
 * @param num2
 * @param k >=1    index+1
 */
function getKthElement(num1: number[], num2: number[], k: number): number {
  let cursor1 = 0;
  let cursor2 = 0;

  while (true) {
    if (cursor1 === num1.length) {
      // 1内都被排除了
      return num2[k - 1 + cursor2];
    }
    if (cursor2 === num2.length) {
      // 2内都被排除了
      return num1[k - 1 + cursor1];
    }
    if (k === 1) {
      return Math.min(num1[cursor1], num2[cursor2]);
    }

    const half = Math.floor(k / 2);

    const newCursor1 = Math.min(cursor1 + half, num1.length);
    const newCursor2 = Math.min(cursor2 + half, num2.length);
    if (num1[newCursor1 - 1] <= num2[newCursor2 - 1]) {
      k = k - (newCursor1 - cursor1);
      cursor1 = newCursor1;
    } else {
      k = k - (newCursor2 - cursor2);
      cursor2 = newCursor2;
    }
  }
}

console.log('-------------------begin--------------------res');
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));
console.log('-------------------end--------------------');
