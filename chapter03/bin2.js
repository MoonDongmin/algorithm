function bin2(n, k) {
  let C = Array.from({length: n + 1}, () => Array(k + 1).fill(0));
  console.log(C);

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= Math.min(i, k); j++) {
      if (j === 0 || j === i) {
        C[i][j] = 1;
      } else {
        C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
      }
    }
  }

  return C[n][k];
}

console.log(bin2(2, 1)); // 10
