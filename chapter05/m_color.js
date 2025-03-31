// 전역 변수로 필요한 변수들을 정의합니다.
let W;
let vcolor;
let m;
let n;

function mColoring(i) {
  if (promising(i)) {
    if (i === n) {
      console.log(vcolor.slice(1, n + 1)); // vcolor[1]부터 vcolor[n]까지 출력
    } else {
      for (let color = 1; color <= m; color++) {
        vcolor[i + 1] = color;
        mColoring(i + 1);
      }
    }
  }
}

function promising(i) {
  let j = 1;
  let switchVal = true;

  while (j < i && switchVal) {
    if (W[i][j] && vcolor[i] === vcolor[j]) {
      switchVal = false;
    }
    j++;
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
vcolor = new Array(W.length).fill(0); // 색상 배열
m = 3; // 색상 수
n = W.length - 1; // 정점의 수
mColoring(1);
