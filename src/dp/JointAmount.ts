/**
 * 凑零钱
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，
 * 再给一个总金额 n，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，则回答 -1
 * https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484524&idx=1&sn=302941466dbf594709b5436a59f8b06c&chksm=9bd7fa64aca07372a8da4b9c4a5f1bab33ee0a93643bf8529c73f43c06b5e3adbbd42877775e&scene=21#wechat_redirect
 * @param coins 面额数组
 * @param amount 需要凑够的金额
 */
function jointAmount(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }
  const dp: number[] = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (const coin of coins) {
      if (i < coin) {
        continue;
      }
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];

  // coins[i]
  // f(amount) = min(f(i-coin)+1,currentMin)
}

(function () {
  const res = jointAmount([1, 2, 5], 11);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
