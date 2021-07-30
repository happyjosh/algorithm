/**
 * 输入是一个二维数组，输出是最优路径的数字和。
 * @link https://leetcode.com/problems/minimum-path-sum/
 * @param grid
 */
function minPathSum(grid: number[][]): number {
  //  [1, 3, 1],
  //  [1, 5, 1],
  //  [4, 2, 1],

  // dp[i][j] = min(dp[i-1][j],dp[i][j-1])+grid[i][j]
  const rows = grid.length;
  if (rows === 0) {
    return 0;
  }
  const columns = grid[0].length;
  if (columns === 0) {
    return 0;
  }

  // i=0，j=0空着做边界判断。
  const dp: number[][] = Array(rows)
    .fill([])
    .map(() => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let min;
      if (i === 0 && j === 0) {
        min = 0;
      } else if (i === 0) {
        min = dp[i][j - 1];
      } else if (j === 0) {
        min = dp[i - 1][j];
      } else {
        const left = dp[i - 1][j];
        const top = dp[i][j - 1];
        min = Math.min(left, top);
      }
      dp[i][j] = min + grid[i][j];
    }
  }

  return dp[rows - 1][columns - 1];
}

(function () {
  const res = minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
