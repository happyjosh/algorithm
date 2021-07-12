(function test() {
  const sortName = 'quick';
  const { sort } = require(`./${sortName}`);

  const res = sort([8, 3, 7, 1, 5, 6, 4, 9, 2]);
  console.log(res);
})();
