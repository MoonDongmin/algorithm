/*
	• n: 키 개수
	•	p: 각 키의 검색 확률 배열 (0-based index)
	•	minavg: 최소 평균 비용을 저장할 객체 ({ value: 0 } 형태)
	•	R: 최적 루트 노드를 저장할 2차원 배열
*/
function optSearchTree(n, p, minavg, R) {
  let A = Array.from({length: n + 2}, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    A[i][i - 1] = 0;
    A[i][i] = p[i - 1]; // p 배열이 0-based index라서 조정
    R[i] = Array(n + 1).fill(0);
    R[i][i] = i;
    R[i][i - 1] = 0;
  }
  console.log(A, R);

  A[n + 1][n] = 0;
  R[n + 1] = Array(n + 1).fill(0);
  R[n + 1][n] = 0;

  for (let diagonal = 1; diagonal <= n - 1; diagonal++) {
    for (let i = 1; i <= n - diagonal; i++) {
      let j = i + diagonal;
      let sumP = 0;
      for (let m = i - 1; m <= j - 1; m++) {
        sumP += p[m];
      }

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

  minavg.value = A[1][n];
}

// 사용 예시
let n = 4;
let p = [0.1, 0.2, 0.4, 0.3]; // 확률 값 예제
let minavg = {value: 0};
let R = Array.from({length: n + 2}, () => Array(n + 1).fill(0));

optSearchTree(n, p, minavg, R);

console.log('Minimum Average Cost:', minavg.value);
console.log('Root Table:', R);
