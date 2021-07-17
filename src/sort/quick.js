const { swap } = require('./utils');

function quick(as) {
  const resAS = [...as];
  innerSort(resAS, 0, resAS.length - 1);
  return resAS;
}

/**
 * 递归调用的方法，会改变参数数组
 * @param as
 */
function innerSort(as, left, right) {
  if (left < right) {
    const partitionIndex = partition(as, left, right);
    innerSort(as, left, partitionIndex - 1);
    innerSort(as, partitionIndex + 1, right);
  }
}

/**
 * 以left的值为基准点，分割
 * @param as
 * @param left
 * @param right
 * @return 基准点索引
 */
function partition(as, left, right) {
  const pivot = left;
  let index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (as[i] < as[pivot]) {
      swap(as, i, index);
      index++;
    }
  }
  swap(as, pivot, index - 1);
  return index - 1;
}

module.exports = { sort: quick };
