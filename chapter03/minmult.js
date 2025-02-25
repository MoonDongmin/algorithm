// 코드를 짜달라고 함
function minmult(n, d) {
  // m: 최소 곱셈 횟수를 저장하는 배열
  // p: 최적의 분할 위치를 저장하는 배열
  let m = Array(n + 1).fill().map(() => Array(n + 1).fill(0));
  let p = Array(n + 1).fill().map(() => Array(n + 1).fill(0));
  console.log(m);
  // 연쇄 행렬의 길이
  for (let diagonal = 1; diagonal < n; diagonal++) {
    // 시작 행렬
    for (let i = 1; i <= n - diagonal; i++) {
      // 끝 행렬
      let j = i + diagonal;

      // 초기값을 무한대로 설정
      m[i][j] = Infinity;

      // k를 기준으로 분할하여 최소 비용 찾기
      for (let k = i; k <= j - 1; k++) {
        let cost = m[i][k] + m[k + 1][j] + d[i - 1] * d[k] * d[j];
        if (cost < m[i][j]) {
          m[i][j] = cost;
          p[i][j] = k;
        }
      }
    }
  }

  return {m, p};
}

// 최적의 순서를 출력하는 함수
function order(p, i, j) {
  if (i === j) {
    process.stdout.write(`A${i}`);
  } else {
    process.stdout.write('(');
    order(p, i, p[i][j]);
    order(p, p[i][j] + 1, j);
    process.stdout.write(')');
  }
}

let d = [5, 4, 6, 2, 7];  // 4개의 행렬: 5×4, 4×6, 6×2, 2×7
let n = d.length - 1;      // 행렬의 개수
let result = minmult(n, d);

console.log('최소 곱셈 횟수:', result.m[1][n]);
console.log('\n최적의 곱셈 순서:');
order(result.p, 1, n);
console.log();
