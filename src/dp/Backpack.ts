interface Info {
  name: string; // 物品名称
  consume: number; // 物品消耗的空间
  value: number; // 物品价值
}

/**
 * 背包问题，背包能装的最大价值是什么（算法图解）
 * @param infos
 * @param consumeLimit 背包空间
 * @param consumeUnit 物品空间最小粒度
 */
function backpack(infos: Info[], consumeLimit: number, consumeUnit: number) {
  const dp: {
    totalValue: number;
    totalConsume: number;
  }[][] = [];
  for (let row = 0; row < infos.length; row++) {
    const info = infos[row];
    dp[row] = [];
    for (let column = 0; column < consumeLimit; column += consumeUnit) {
      if (row === 0) {
        // 第一行
        if (info.consume > consumeLimit) {
          dp[row][column] = { totalValue: 0, totalConsume: 0 };
        } else {
          dp[row][column] = {
            totalValue: info.value,
            totalConsume: info.consume,
          };
        }

        if (dp[row][column].totalConsume > column + consumeUnit) {
          dp[row][column] = { totalValue: 0, totalConsume: 0 };
        }

        continue;
      }

      const preRowT = dp[row - 1][column];
      const remainConsume = column - info.consume;

      if (remainConsume < 0) {
        dp[row][column] = preRowT;
      } else {
        const newT: typeof dp[number][number] = {
          totalValue: dp[row][remainConsume].totalValue + info.value,
          totalConsume: dp[row][remainConsume].totalConsume + info.consume,
        };
        dp[row][column] = newT.totalValue > preRowT.totalValue ? newT : preRowT;
      }
    }
  }

  // console.log('-------------------begin--------------------');
  // console.log(dp);
  // console.log('-------------------end--------------------');
  return dp[infos.length - 1][consumeLimit - consumeUnit];
}

(function () {
  const res = backpack(
    [
      { name: 'C', value: 1500, consume: 1 },
      { name: 'B', value: 2000, consume: 3 },
      { name: 'A', value: 3000, consume: 4 },
    ],
    4,
    1
  );
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
