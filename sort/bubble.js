const { swap } = require('./utils');

/**
 * 冒泡排序
 * @param as
 * @return {*[]}
 */
function bubble(as) {
  // 8,3,5,6,9,2
  const resAS = [...as];

  for (let i = 0; i < resAS.length; i++) {
    let exchanged = false;

    for (let j = 0; j < resAS.length - i; j++) {
      if (resAS[j] > resAS[j + 1]) {
        swap(resAS, j, j + 1);

        exchanged = true; // 发生过交换
      }
    }

    if (!exchanged) {
      // 本次循环未交换过代表已经排序完成
      break;
    }
  }

  return resAS;
}

module.exports = { sort: bubble };
