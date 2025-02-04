function matrixmult(n, A, B, C) {
  let i, j, k;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      C[i][j] = 0;
      for (k = 1; k <= n; k++) {
        C[i][j] = C[i][j] + A[i][k] * B[k][j];
      }
    }
  }
}
