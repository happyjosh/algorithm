/**
 * 滑动窗口
 * https://leetcode.com/problems/minimum-window-substring/
 * @param s
 * @param t
 */
function minWindow(s: string, t: string): string {
  const tCharMap = new Map<string, number>();
  const windowCharMap = new Map<string, number>();
  for (const c of t) {
    tCharMap.set(c, (tCharMap.get(c) ?? 0) + 1);
  }

  let l = 0;
  let r = 0;

  let resL = 0;
  let resR = 0;

  while (r <= s.length && l < s.length) {
    const isNotContain = () => {
      if (windowCharMap.size < tCharMap.size) {
        return true;
      }
      for (const [k, v] of tCharMap) {
        const subV = windowCharMap.get(k) ?? 0;
        if (v > subV) {
          return true;
        }
      }
      return false;
    };

    if (isNotContain()) {
      r++;

      const c = s[r - 1];
      tCharMap.has(c) && windowCharMap.set(c, (windowCharMap.get(c) ?? 0) + 1);
    } else {
      if (resR === 0 || r - l < resR - resL) {
        resL = l;
        resR = r;
      }

      const c = s[l];
      windowCharMap.has(c) &&
        windowCharMap.set(c, (windowCharMap.get(c) ?? 0) - 1);

      l++;
    }
  }

  return s.substring(resL, resR);
}

console.log('-------------------begin--------------------');
console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log('-------------------end--------------------');
