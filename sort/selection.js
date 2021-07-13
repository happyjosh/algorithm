const { swap } = require('./utils');

/**
 * 选择排序
 * @param as
 * @return {*[]}
 */
function selection(as) {
  // 8,3,5,6,9,2
  const resAS = [...as];

  for (let i = 0; i < resAS.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < resAS.length; j++) {
      if (resAS[j] < resAS[minIndex]) {
        minIndex = j;
      }
    }

    swap(resAS, minIndex, i);
  }

  return resAS;
}

module.exports = { sort: selection };
