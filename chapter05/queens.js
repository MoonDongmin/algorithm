function queens(i, n, col) {
  if (promising(i, col)) {
    if (i === n) {
      console.log(col.slice(1)); // 1부터 n까지의 col 배열 출력
    } else {
      for (let j = 1; j <= n; j++) {
        col[i + 1] = j;
        queens(i + 1, n, col);
      }
    }
  }
}

function promising(i, col) {
  let k = 1;
  let switchVal = true;

  while (k < i && switchVal) {
    if (col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) {
      switchVal = false;
    }
    k++;
  }

  return switchVal;
}

function solveNQueens(n) {
  const col = new Array(n + 1).fill(0);
  queens(0, n, col);
}

solveNQueens(4);
