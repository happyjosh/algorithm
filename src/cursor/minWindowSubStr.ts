/**
 * 滑动窗口
 * https://leetcode.com/problems/minimum-window-substring/
 * @param s
 * @param t
 */
function minWindow(s: string, t: string): string {
  const tCharMap = new Map<string, number>();
  const subCharMap = new Map<string, number>();
  for (const c of t) {
    tCharMap.set(c, (tCharMap.get(c) ?? 0) + 1);
  }

  let l = 0;
  let r = 1;

  let resL = 0;
  let resR = 0;

  while (r <= s.length && l < s.length) {
    const isNotContain = () => {
      if (r - l < t.length) {
        return true;
      }
      subCharMap.clear();
      for (let i = l; i < r; i++) {
        const c = s.charAt(i);
        subCharMap.set(c, (subCharMap.get(c) ?? 0) + 1);
      }

      for (const [k, v] of tCharMap) {
        const subV = subCharMap.get(k) ?? 0;
        if (v > subV) {
          return true;
        }
      }
      return false;
    };

    if (isNotContain()) {
      r++;
    } else {
      if (resR === 0 || r - l < resR - resL) {
        resL = l;
        resR = r;
      }
      l++;
    }
  }

  return s.substring(resL, resR);
}

console.log('-------------------begin--------------------');
console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log('-------------------end--------------------');
