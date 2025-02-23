/*
* k는 경유하는 정점
* i는 출발 정점
* j는 도작 정점
* */
function floyd(w) {
  let d = w.map(row => [...row]);
  console.log(d);

  for (let k = 0; k < w.length; k++) {
    for (let i = 0; i < w.length; i++) {
      for (let j = 0; j < w.length; j++) {
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
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

console.log(floyd(w));
