/**
 * 一群孩子站成一排，每一个孩子有自己的评分。
 * 现在需要给这些孩子发糖果，规则是如果一 个孩子的评分比自己身旁的一个孩子要高，
 * 那么这个孩子就必须得到比身旁孩子更多的糖果;所 有孩子至少要有一个糖果。求解最少需要多少个糖果
 * @link https://leetcode.com/problems/candy/
 * @param ratings
 */
function candy(ratings: number[]): number {
  let length = ratings.length;
  const candies = Array(length).fill(1);

  for (let i = 0; i < length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      candies[i + 1] = candies[i] + 1;
    }
  }

  for (let i = length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
    }
  }

  return candies.reduce((preV, curV) => preV + curV, 0);
}

(function () {
  const res = candy([1, 0, 2]);
  console.log('-------------------begin--------------------');
  console.log(res);
  console.log('-------------------end--------------------');
})();
