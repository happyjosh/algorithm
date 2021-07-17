/**
 * 防抖，一个时间段内没有后续调用了才真正执行。
 * 一般作用于按钮防重，联想搜索
 *
 * @param func
 * @param timeMills
 * @return {function(): void}
 */
function debounce(func, timeMills) {
  let timer = null;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
      timer = null;
    }, timeMills);
  };
}
