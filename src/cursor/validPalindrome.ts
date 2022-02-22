/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @param s
 */
function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  //cbbcc
  //01234

  while (right - left > 0) {
    if (s[left] !== s[right]) {
      return (
        subValidPalindrome(s, left + 1, right) ||
        subValidPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
}

function subValidPalindrome(s: string, left: number, right: number): boolean {
  while (right - left > 0) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log('-------------------begin--------------------res');
// console.log(subValidPalindrome('caaaaaaaaaac', 0, 'caaaaaaaaaac'.length - 1));
console.log(validPalindrome('cbbcc'));
console.log('-------------------end--------------------');
