function sum(n, s) {
  let sum = 0;
  // for (let x of s) {
  //   sum += x;
  // }
  for (let i = 1; i < n; i++) {
    sum += s[i];
  }
  return sum;
}
