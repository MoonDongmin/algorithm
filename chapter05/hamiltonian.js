// 전역 변수로 필요한 변수들을 정의합니다.
let W;
let vindex;
let n;

function hamiltonian(i) {
  if (promising(i)) {
    if (i === n - 1) {
      console.log(vindex.slice(0, n)); // vindex[0]부터 vindex[n-1]까지 출력
    } else {
      for (let j = 2; j <= n; j++) {
        vindex[i + 1] = j;
        hamiltonian(i + 1);
      }
    }
  }
}

function promising(i) {
  let j;
  let switchVal;

  if (i === n - 1 && !W[vindex[n - 1]][vindex[0]]) {
    switchVal = false;
  } else if (i > 0 && !W[vindex[i - 1]][vindex[i]]) {
    switchVal = false;
  } else {
    switchVal = true;
    j = 1;

    while (j < i && switchVal) {
      if (vindex[i] === vindex[j]) {
        switchVal = false;
      }
      j++;
    }
  }

  return switchVal;
}

// 예시 실행
W = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]; // 인접 행렬
vindex = new Array(W.length).fill(0); // 정점 순서 배열
vindex[0] = 0; // 첫 번째 정점 초기화
n = W.length; // 정점의 수
hamiltonian(1);
