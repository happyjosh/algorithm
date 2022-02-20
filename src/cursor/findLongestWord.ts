/**
 * https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
 * @param s
 * @param dictionary
 */
function findLongestWord(s: string, dictionary: string[]): string {
  // 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
  // 输出："apple"
  let res = '';

  for (const t of dictionary) {
    if (
      isContain(s, t) &&
      (t.length > res.length || (t.length === res.length && t < res))
    ) {
      res = t;
    }
  }

  return res;
}

function isContain(s: string, t: string): boolean {
  //    abpcplea    ale

  let cursor1 = 0;
  let cursor2 = 0;

  while (cursor1 < s.length && cursor2 < t.length) {
    if (s[cursor1] === t[cursor2]) {
      cursor1++;
      cursor2++;
    } else {
      cursor1++;
    }
  }

  return cursor2 === t.length;
}

console.log('-------------------begin--------------------');
console.log(
  findLongestWord('abpcplea', [
    'ale',
    'apple',
    'monkey',
    'plea',
    'abpcplaaa',
    'abpcllllll',
    'abccclllpppeeaaaa',
  ])
);
console.log('-------------------end--------------------');
