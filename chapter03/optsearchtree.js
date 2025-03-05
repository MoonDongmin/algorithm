function optSearchTree(n, p) {
  let A = Array.from({length: n + 2}, () => Array(n + 1).fill(0));
  let R = Array.from({length: n + 2}, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    A[i][i - 1] = 0;
    A[i][i] = p[i - 1];
    R[i][i] = i;
    R[i][i - 1] = 0;
  }

  A[n + 1][n] = 0;
  R[n + 1][n] = 0;

  for (let diagonal = 1; diagonal <= n - 1; diagonal++) {
    for (let i = 1; i <= n - diagonal; i++) {
      let j = i + diagonal;
      let sumP = p.slice(i - 1, j).reduce((acc, val) => acc + val, 0);

      let minVal = Infinity;
      let minK = i;

      for (let k = i; k <= j; k++) {
        let cost = A[i][k - 1] + A[k + 1][j];
        if (cost < minVal) {
          minVal = cost;
          minK = k;
        }
      }

      A[i][j] = minVal + sumP;
      R[i][j] = minK;
    }
  }

  return {minavg: A[1][n], R};
}

// 사용 예시
let n = 4;
let p = [0.1, 0.2, 0.4, 0.3];
let result = optSearchTree(n, p);

console.log('최소 평균 비용:', result.minavg);
console.log('루트 테이블:', result.R);
