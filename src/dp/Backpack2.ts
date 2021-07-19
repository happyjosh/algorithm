/**
 * 给你一个可装载重量为W的背包,和一些物品。最多能装的物品价值多少
 * https://zhuanlan.zhihu.com/p/112075593
 * @param limitW 背包可装载重量
 * @param vs 物品价值数组
 * @param ws 物品重量数组
 */
function backpack2(limitW: number, vs: number[], ws: number[]): number {
  // 状态目标 w
  // dp[i][j] = max(dp[i-1][j],vs[i]+dp[i][j-ws[i]])
  const n = vs.length;
  const dp: number[][] = new Array(n + 1).fill([]).map(() =>
    new Array(limitW + 1).fill(0)
  );
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < limitW + 1; j++) {
      if (j < ws[i - 1]) {
        // 装不下当前物品
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - ws[i - 1]] + vs[i - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[n][limitW];
}

(function () {
  //W = 4
  const vs = [1500, 2000, 3000];
  const ws = [1, 3, 4];
  const res = backpack2(4, vs, ws);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
