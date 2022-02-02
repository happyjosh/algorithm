/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param numbers
 * @param target
 */
function twoSum(numbers: number[], target: number): number[] {
  let cursor1 = 0,
    cursor2 = numbers.length - 1;

  while (cursor1 < cursor2) {
    const tempSum = numbers[cursor1] + numbers[cursor2];
    if (tempSum > target) {
      cursor2--;
    } else if (tempSum < target) {
      cursor1++;
    } else {
      break;
    }
  }
  return [cursor1 + 1, cursor2 + 1];
}

const sum = twoSum([2, 7, 11, 15], 9);
console.log('-------------------begin--------------------');
console.log(sum);
console.log('-------------------end--------------------');
