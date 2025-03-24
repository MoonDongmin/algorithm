function estimate_n_queens(n) {
  let i, j, col = new Array(n + 1).fill(0);
  let m, mprod, numnodes;
  let promChildren;

  i = 0;
  numnodes = 1;
  m = 1;
  mprod = 1;

  while (m !== 0 && i !== n) {
    mprod = mprod * m;
    numnodes = numnodes + mprod * n;
    i++;
    m = 0;
    promChildren = [];

    for (j = 1; j <= n; j++) {
      col[i] = j;
      if (promising(i, col)) {
        m++;
        promChildren.push(j);
      }
    }

    if (m !== 0) {
      j = promChildren[Math.floor(Math.random() * promChildren.length)];
      col[i] = j;
    }
  }

  return numnodes;
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

// 예시: 4-Queens 문제에 대한 노드 수 추정
const estimatedNodes = estimate_n_queens(4);
console.log(estimatedNodes);
