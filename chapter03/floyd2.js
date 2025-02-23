/*
* k는 경유하는 정점
* i는 출발 정점
* j는 도작 정점
* */
function floyd2(w) {
  let d = w.map(row => [...row]);
  let p = Array(w.length).fill().map(() => Array(w.length).fill(0));

  // console.log(p);

  for (let k = 0; k < w.length; k++) {
    for (let i = 0; i < w.length; i++) {
      for (let j = 0; j < w.length; j++) {
        if (d[i][k] + d[k][j] < d[i][j]) {
          p[i][j] = k; // i에서 j로 가는 경로에서 경유하는 정점 k를 기록
          d[i][j] = d[i][k] + d[k][j]; // 새로운 최단 거리로 갱신
        }
      }
    }
  }
  return d;
}

let w = [
  [0, 5, Infinity, 8],
  [7, 0, 9, Infinity],
  [2, Infinity, 0, 4],
  [Infinity, Infinity, 3, 0],
];

console.log(floyd2(w));
