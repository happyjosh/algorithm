/**
 * 节流，一个时间段内的执行只有一次生效
 * @param func
 * @param timeMills
 * @return {function(): void}
 */
function throttle(func, timeMills) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, timeMills);
    }
  };
}
