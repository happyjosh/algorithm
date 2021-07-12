function swap(as, i, j) {
  if (i === j) {
    return;
  }
  as[i] ^= as[j];
  as[j] ^= as[i];
  as[i] ^= as[j];
  // const temp = arr[i];
  // arr[i] = arr[j];
  // arr[j] = temp;
}

module.exports = { swap };
