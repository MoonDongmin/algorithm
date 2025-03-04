function opt(x, y, i, j) {
  let m = x.length;
  let n = y.length;

  if (i === m) return 2 * (n - j);
  if (j === n) return 2 * (m - i);

  let penalty = (x[i] === y[j]) ? 0 : 1;

  return Math.min(
    opt(x, y, i + 1, j + 1) + penalty,
    opt(x, y, i + 1, j) + 2,
    opt(x, y, i, j + 1) + 2,
  );
}

// 테스트
let x = ['A', 'G', 'C', 'T'];
let y = ['G', 'A', 'C', 'T'];
console.log('최적 정렬 비용:', opt(x, y, 0, 0));

// 동적 게획법
function opt2(x, y) {
  let m = x.length;
  let n = y.length;
  let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = 2 * j;
      } else if (j === 0) {
        dp[i][j] = 2 * i;
      } else {
        let penalty = (x[i - 1] === y[j - 1]) ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + penalty,
          dp[i - 1][j] + 2,
          dp[i][j - 1] + 2,
        );
      }
    }
  }

  return dp[m][n];
}

// 테스트
let x = ['A', 'G', 'C', 'T'];
let y = ['G', 'A', 'C', 'T'];
console.log('최적 정렬 비용:', opt2(x, y));
